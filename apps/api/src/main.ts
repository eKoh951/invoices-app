import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { VersioningType } from "@nestjs/common/enums";
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("Invoice App")
    .setDescription("Endpoint Documentation")
    .setVersion("1.0")
    .addTag("Users")
    .addTag("Invoices")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.useStaticAssets(join(__dirname, "../swagger"), { prefix: "docs" })

  await app.listen(process.env.API_PORT);
}
bootstrap();

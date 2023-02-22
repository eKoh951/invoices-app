import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const NESTJS_API_PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Invoice App - Endpoints')
    .setDescription('Test')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('users')
    .addTag('invoices')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
  });

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(NESTJS_API_PORT);
}
bootstrap();

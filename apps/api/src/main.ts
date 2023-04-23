import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableVersioning();
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE'
  });

  const config = new DocumentBuilder()
    .setTitle('Invoice App')
    .setDescription('Endpoint Documentation')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Invoices')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useStaticAssets(join(__dirname, '../swagger'), { prefix: 'docs' });

  const port = configService.get<number>('port');
  await app.listen(port);
}
bootstrap();

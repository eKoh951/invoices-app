import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const NESTJS_API_PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(NESTJS_API_PORT);
}
bootstrap();

import {
  Module,
  NestModule,
  MiddlewareConsumer,
  CacheModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ValidateAccessToken } from './middlewares/auth.middleware';
import envConfig from './config/env.config';

import { V1Module } from './v1/v1.module';

@Module({
  imports: [
    V1Module,
    CacheModule.register({ isGlobal: true, ttl: 0 }),
    ConfigModule.forRoot({ isGlobal: true, load: [envConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoUri'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateAccessToken).forRoutes('dev');
  }
}

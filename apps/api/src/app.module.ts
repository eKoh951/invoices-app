import {
  Module,
  NestModule,
  MiddlewareConsumer,
  CacheModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ValidateAccessToken } from './core/middlewares/auth.middleware';
import { CurrentUserMiddleware } from './core/middlewares/current-user.middleware';
import envConfig from './config/env.config';

import { V1Module } from './api/v1/v1.module';
import { Auth0Utils } from './core/utils/auth0.utils';

@Module({
  imports: [
    V1Module,
    CacheModule.register({ isGlobal: true, ttl: 0 }),
    ConfigModule.forRoot({ isGlobal: true, cache: true, load: [envConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoUri'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    Auth0Utils,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateAccessToken).forRoutes('*');
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}

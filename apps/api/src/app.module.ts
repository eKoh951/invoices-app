import {
  Module,
  NestModule,
  MiddlewareConsumer,
  CacheModule,
  CacheInterceptor,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ValidateAccessToken } from './middlewares/auth.middleware';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import envConfig from './config/env.config';

import { V1Module } from './v1/v1.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Auth0Utils } from './utils/auth0.utils';

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
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateAccessToken).forRoutes('*');
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}

import {
  Module,
  NestModule,
  MiddlewareConsumer,
  CacheInterceptor,
} from '@nestjs/common';
import { AppwriteModule } from './modules/appwrite/appwrite.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
// import { CurrentUserMiddleware } from './core/middlewares/current-user.middleware';
import envConfig from './config/env.config';

import { V1Module } from './api/v1/v1.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    V1Module,
    AppwriteModule,
    CacheModule.register({ isGlobal: true, ttl: 0 }),
    ConfigModule.forRoot({ isGlobal: true, cache: true, load: [envConfig] }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}

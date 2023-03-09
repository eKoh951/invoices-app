import {
  CacheInterceptor,
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersServiceV1 } from './users.service';

import { InvoicesModuleV1 } from '../invoices/invoices.module';
import { UsersSchema } from './schemas/users.schema';

import { Auth0Utils } from 'src/utils/auth0.utils';
import { CurrentUserMiddleware } from 'src/v1/users/middlewares/current-user.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    InvoicesModuleV1,
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  providers: [
    UsersServiceV1,
    Auth0Utils,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class UsersModuleV1 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('dev');
  }
}

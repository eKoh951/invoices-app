import { CacheInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersServiceV1 } from './users.service';

import { InvoicesModuleV1 } from '../invoices/invoices.module';

import { UsersUtilsV1 } from './users.utils';

@Module({
  imports: [InvoicesModuleV1],
  providers: [
    UsersServiceV1,
    UsersUtilsV1,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class UsersModuleV1 {}

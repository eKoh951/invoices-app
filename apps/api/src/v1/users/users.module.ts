import {
  CacheInterceptor,
  Module,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersServiceV1 } from './users.service';

import { InvoicesModuleV1 } from '../invoices/invoices.module';

import { Auth0Utils } from 'src/utils/auth0.utils';
import { UsersUtilsV1 } from './users.utils';

@Module({
  imports: [
    InvoicesModuleV1,
  ],
  providers: [
    UsersServiceV1,
    Auth0Utils,
    UsersUtilsV1,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class UsersModuleV1 {}

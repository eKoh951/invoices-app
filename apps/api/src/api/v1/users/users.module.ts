import { Module } from '@nestjs/common';
import { UsersServiceV1 } from './users.service';

import { InvoicesModuleV1 } from '../invoices/invoices.module';

import { Auth0Utils } from 'src/core/utils/auth0.utils';
import { UsersUtilsV1 } from './users.utils';

@Module({
  imports: [InvoicesModuleV1],
  providers: [
    UsersServiceV1,
    Auth0Utils,
    UsersUtilsV1
  ],
})
export class UsersModuleV1 {}

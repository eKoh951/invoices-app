import { Module } from '@nestjs/common';
import { UsersModuleV1 } from './users/users.module';
import { InvoicesModuleV1 } from './invoices/invoices.module';

import { V1Controller } from './v1.controller';

import { UsersServiceV1 } from './users/users.service';
import { InvoicesServiceV1 } from './invoices/invoices.service';

import { UsersUtilsV1 } from './users/users.utils';
import { InvoicesUtilsV1 } from './invoices/invoices.utils';

@Module({
  imports: [
    UsersModuleV1,
    InvoicesModuleV1,
  ],
  controllers: [V1Controller],
  providers: [
    UsersServiceV1,
    InvoicesServiceV1,
    UsersUtilsV1,
    InvoicesUtilsV1,
  ],
})
export class V1Module {}

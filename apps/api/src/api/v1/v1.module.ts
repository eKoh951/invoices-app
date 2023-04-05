import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModuleV1 } from './users/users.module';
import { InvoicesModuleV1 } from './invoices/invoices.module';

import { V1Controller } from './v1.controller';

import { UsersServiceV1 } from './users/users.service';
import { InvoicesServiceV1 } from './invoices/invoices.service';

import { InvoicesSchema } from './invoices/schemas/invoices.schema';

import { UsersUtilsV1 } from './users/users.utils';
import { InvoicesUtilsV1 } from './invoices/invoices.utils';
import { Auth0Utils } from 'src/core/utils/auth0.utils';

@Module({
  imports: [
    UsersModuleV1,
    InvoicesModuleV1,
    MongooseModule.forFeature([{ name: 'Invoices', schema: InvoicesSchema }]),
  ],
  controllers: [V1Controller],
  providers: [
    UsersServiceV1,
    InvoicesServiceV1,
    UsersUtilsV1,
    InvoicesUtilsV1,
    Auth0Utils,
  ],
})
export class V1Module {}

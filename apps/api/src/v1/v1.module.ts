import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModuleV1 } from './users/users.module';
import { InvoicesModuleV1 } from './invoices/invoices.module';

import { V1Controller } from './v1.controller';

import { UsersServiceV1 } from './users/users.service';
import { InvoicesServiceV1 } from './invoices/invoices.service';

import { UsersSchema } from './users/schemas/users.schema';
import { InvoicesSchema } from './invoices/schemas/invoices.schema';

import { InvoicesUtils } from './invoices/invoices.utils';
import { Auth0Utils } from 'src/utils/auth0.utils';

@Module({
  imports: [
    UsersModuleV1,
    InvoicesModuleV1,
    MongooseModule.forFeature([
      { name: 'Users', schema: UsersSchema },
      { name: 'Invoices', schema: InvoicesSchema },
    ]),
  ],
  controllers: [V1Controller],
  providers: [UsersServiceV1, InvoicesServiceV1, InvoicesUtils, Auth0Utils],
})
export class V1Module {}

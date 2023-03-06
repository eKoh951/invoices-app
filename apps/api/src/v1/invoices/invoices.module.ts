import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from '../users/schemas/users.schema';
import { InvoicesServiceV1 } from './invoices.service';
import { InvoicesUtils } from './invoices.utils';

import { InvoicesSchema } from './schemas/invoices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Invoices', schema: InvoicesSchema },
      { name: 'Users', schema: UsersSchema },
    ]),
  ],
  providers: [InvoicesServiceV1, InvoicesUtils],
  exports: [InvoicesServiceV1],
})
export class InvoicesModuleV1 {}

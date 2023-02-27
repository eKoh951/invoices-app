import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoicesServiceV1 } from './invoices.service';

import { InvoicesSchema } from './schemas/invoices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invoices', schema: InvoicesSchema }]),
  ],
  providers: [InvoicesServiceV1],
  exports: [InvoicesServiceV1],
})
export class InvoicesModuleV1 {}

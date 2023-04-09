import { Module } from '@nestjs/common';
import { InvoicesServiceV1 } from './invoices.service';
import { InvoicesUtilsV1 } from './invoices.utils';

@Module({
  providers: [InvoicesServiceV1, InvoicesUtilsV1],
  exports: [InvoicesServiceV1],
})
export class InvoicesModuleV1 {}

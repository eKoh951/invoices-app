import { Module } from '@nestjs/common';
import { InvoicesServiceV1 } from './invoices.service';

@Module({
  providers: [InvoicesServiceV1],
  exports: [InvoicesServiceV1],
})
export class InvoicesModuleV1 {}

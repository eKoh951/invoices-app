import { Module } from "@nestjs/common";
import { InvoicesServiceV1 } from "./invoices.service";
import { InvoicesControllerV1 } from "./invoices.controller";

@Module({
  controllers: [InvoicesControllerV1],
  providers: [InvoicesServiceV1],
})
export class InvoicesModuleV1 {}

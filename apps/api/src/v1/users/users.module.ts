import { Module } from "@nestjs/common";
import { UsersServiceV1 } from "./users.service";
import { UsersControllerV1 } from "./users.controller";

import { InvoicesModuleV1 } from "../invoices/invoices.module";

@Module({
  imports: [InvoicesModuleV1],
  controllers: [UsersControllerV1],
  providers: [UsersServiceV1],
})
export class UsersModuleV1 {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModuleV1 } from "./v1/users/users.module";
import { InvoicesModuleV1 } from "./v1/invoices/invoices.module";

@Module({
  imports: [ConfigModule.forRoot(), UsersModuleV1, InvoicesModuleV1],
  controllers: [],
  providers: [],
})
export class AppModule {}

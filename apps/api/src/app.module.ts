import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [UsersModule, InvoicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

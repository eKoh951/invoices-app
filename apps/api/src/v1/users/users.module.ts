import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersServiceV1 } from './users.service';
import { UsersControllerV1 } from './users.controller';

import { InvoicesModuleV1 } from '../invoices/invoices.module';
import { UsersSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
    InvoicesModuleV1,
  ],
  controllers: [UsersControllerV1],
  providers: [UsersServiceV1],
})
export class UsersModuleV1 {}

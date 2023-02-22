import { Module } from "@nestjs/common";
import { UsersServiceV1 } from "./users.service";
import { UsersControllerV1 } from "./users.controller";

@Module({
  controllers: [UsersControllerV1],
  providers: [UsersServiceV1],
})
export class UsersModuleV1 {}

import { Controller, Get } from "@nestjs/common";
import { UsersServiceV1 } from "./users.service";
import { UserDto } from "./dto/users.dto";

@Controller({ path: "users", version: "1" })
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersServiceV1) {}
}

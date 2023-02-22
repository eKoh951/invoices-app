import { Controller, Get } from "@nestjs/common";
import { UsersServiceV1 } from "./users.service";
import { UserDto } from "./dto/user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller({ path: "users", version: "1" })
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersServiceV1) {}

  @Get()
  getData() {
    return "uwu";
  }
}

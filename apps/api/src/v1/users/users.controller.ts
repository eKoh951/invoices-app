import { Controller, Body, Param, Get } from "@nestjs/common";
import { UsersServiceV1 } from "./users.service";
import { UserDto } from "./dto/users.dto";
import { ApiTags, ApiBody, ApiOperation, ApiParam } from "@nestjs/swagger";
import { ApiOkResponse } from "@nestjs/swagger";

@ApiTags("Users")
@Controller({ path: "users", version: "1" })
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersServiceV1) {}

  @Get()
  @ApiBody({ type: [UserDto] })
  @ApiOperation({ summary: 'Gets all available users' })
  @ApiOkResponse({ description: "Successfully obtained users" })
  getAllUsers(): UserDto[] {
    return [{ id: "1", username: "adad", email: "dad" }];
  }
  @Get(':userId')
  @ApiBody({ type: UserDto })
  @ApiParam({
    name:'userId',
    type: 'string',
    description: 'User unique id',
    required: true
  })
  @ApiOperation({ summary: 'Gets the requested user' })
  @ApiOkResponse({ description: "Successfully obtained user" })
  getUser(@Param('userId') userId: string): UserDto {
    return { id: "1", username: "adad", email: "dad" };
  }
}

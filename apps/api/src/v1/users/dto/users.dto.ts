import {} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;
}

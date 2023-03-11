import {
  IsString,
  IsBoolean,
  IsEmail,
  IsDate,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  _id?: string;

  @IsBoolean()
  @ApiProperty()
  admin: boolean;

  @MinLength(5)
  @MaxLength(15)
  @ApiProperty()
  username: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  avatar?: string;

  @IsDate()
  @ApiProperty()
  createdAt?: Date;

  @IsDate()
  @ApiProperty()
  updatedAt?: Date;
}

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @IsOptional()
  @ApiProperty({ required: false })
  username?: string;
}

export class GetUserParams {
  @IsString()
  username: string;
}


import { IsString, MaxLength, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AppMetadata, Identity, User, UserMetadata } from 'auth0';

export class UserDto implements User {
  email?: string | undefined;
  email_verified?: boolean | undefined;
  username?: string | undefined;
  phone_number?: string | undefined;
  phone_verified?: boolean | undefined;
  user_id?: string | undefined;
  _id?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  identities?: Identity[] | undefined;
  app_metadata?: AppMetadata | undefined;
  user_metadata?: UserMetadata | undefined;
  picture?: string | undefined;
  name?: string | undefined;
  nickname?: string | undefined;
  multifactor?: string[] | undefined;
  last_ip?: string | undefined;
  last_login?: string | undefined;
  last_password_reset?: string | undefined;
  logins_count?: number | undefined;
  blocked?: boolean | undefined;
  given_name?: string | undefined;
  family_name?: string | undefined;
}
export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @IsOptional()
  @ApiProperty({ required: false })
  nickname?: string;
}

export class PasswordRecoveryDto {
  status: string;
}

import { UserDto, UpdateUserDto } from '../../api/v1/users/dto/users.dto';
import { UsersServiceV1 } from '../../api/v1/users/users.service';
import { NewUserDtoStub } from '../stubs/users.dto.stub';

export class UsersServiceV1Mock extends UsersServiceV1 {
  async updateUser(
    userId: string,
    body: UpdateUserDto,
    avatarFile: Express.Multer.File
  ): Promise<UserDto> {
    return NewUserDtoStub();
  }
}

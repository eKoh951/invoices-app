import {
  UserDto,
  UpdateUserDto,
} from '../../../v1/users/dto/users.dto';

export const CurrentUserDtoStub = (): UserDto => ({
  email: 'test@email.com',
  user_id: 'test|1234567890',
  nickname: 'testGuy',
});

export const UpdateUserDtoStub = (): UpdateUserDto => ({
  nickname: 'newtest1234',
});

export const NewUserDtoStub = (): UserDto => ({
  nickname: 'newtest1234',
});

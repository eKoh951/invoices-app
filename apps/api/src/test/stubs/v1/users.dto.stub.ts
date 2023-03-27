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
  nickname: 'newGuy',
});

export const NewUserDtoStub = (): UserDto => ({
  email: 'test@email.com',
  user_id: 'test|1234567890',
  nickname: 'newGuy',
});

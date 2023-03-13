import {
  CreateUserDto,
  UpdateUserDto,
  GetUserParams,
} from '../../../v1/users/dto/users.dto';

export const CreateUserDtoStub = (): CreateUserDto => ({
  email: 'test1234@email.com',
});

export const GetUserParamsStub = (): GetUserParams => ({
  username: 'test1234',
});

export const GetUserParamsStubError = (): GetUserParams => ({
  username: 'random1234',
});

export const UpdateUserDtoStub = (): UpdateUserDto => ({
  username: 'newtest1234',
});

export const NewUserDtoStub = (): GetUserParams => ({
  username: 'newtest1234',
});

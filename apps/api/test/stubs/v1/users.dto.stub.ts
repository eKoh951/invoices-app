import { CreateUserDto, UpdateUserDto, UserDto, GetUserParams } from '../../../src/v1/users/dto/users.dto'

export const CreateUserDtoStub = (): CreateUserDto => ({
  email: 'test1234@email.com'
})

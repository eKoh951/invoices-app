import { User, AppMetadata, UserMetadata } from 'auth0';
import { Auth0Utils } from '../../core/utils/auth0.utils';
import { UserDto } from '../../api/v1/users/dto/users.dto';
import { CurrentUserDtoStub } from '../stubs/users.dto.stub';

export class Auth0UtilsMock extends Auth0Utils {
  async getAuthToken(): Promise<string> {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  }

  async getUserById(userId: string): Promise<UserDto> {
    return CurrentUserDtoStub();
  }

  async getPrimaryUser(
    email: string
  ): Promise<User<AppMetadata, UserMetadata>> {
    return CurrentUserDtoStub();
  }
}

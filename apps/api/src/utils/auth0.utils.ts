import { ConfigService } from '@nestjs/config';
import { Auth0Api, Auth0 } from 'src/interfaces/env.config.interface';
import {
  CACHE_MANAGER,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

import {
  AuthenticationClient,
  ManagementClient,
  User,
  UserMetadata,
  AppMetadata,
} from 'auth0';

export class Auth0Utils {
  constructor(
    private configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
    this.init();
  }

  private token: string;
  private auth0Client: AuthenticationClient;
  private auth0Managment: ManagementClient;

  private async init(): Promise<void> {
    const { domain } = this.configService.get<Auth0>('auth0');
    const { clientId, clientSecret } =
      this.configService.get<Auth0Api>('auth0.api');

    this.auth0Client = new AuthenticationClient({
      domain,
      clientId,
      clientSecret,
    });

    this.token = await this.getAuthToken();

    this.auth0Managment = new ManagementClient({
      token: this.token,
      domain,
    });
  }

  async getAuthToken(): Promise<string> {
    const { audience } = this.configService.get<Auth0>('auth0');

    const token = await this.cacheManager.get<string>('auth0-token');

    if (!token) {
      try {
        const { access_token } = await this.auth0Client.clientCredentialsGrant({
          audience,
        });

        await this.cacheManager.set('auth0-token', access_token, 86_400_000);

        return access_token;
      } catch (error) {
        throw new InternalServerErrorException(
          `An error occurred while getting the auth0 token`
        );
      }
    }

    return token;
  }

  async getUserById(userId: string): Promise<any> {
    try {
      const user = await this.auth0Managment.getUser({ id: userId });
      const allUsersWithSameEmail = await this.auth0Managment.getUsersByEmail(
        user.email
      );

      if (allUsersWithSameEmail.length > 1) {
        const primaryUser = await this.getPrimaryUser(user.email);
        const otherUsers = allUsersWithSameEmail.filter(
          (user) => user.user_id !== primaryUser.user_id
        );

        otherUsers.forEach(async (user) => {
          const { user_id } = user;
          await this.auth0Managment.linkUsers(primaryUser.user_id, { user_id });
        });

        return primaryUser;
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occurred while getting the current user (AuthID)`
      );
    }
  }

  async getPrimaryUser(
    email: string
  ): Promise<User<AppMetadata, UserMetadata>> {
    const users = await this.auth0Managment.getUsersByEmail(email);
    const providerOrder = ['auth0', 'google-oauth2', 'facebook', 'discord'];

    const primaryUser = users.reduce((prev, current) => {
      const prevProvider = prev.identities[0].provider;
      const currentProvider = current.identities[0].provider;

      return providerOrder.indexOf(prevProvider) <
        providerOrder.indexOf(currentProvider)
        ? prev
        : current;
    });

    return primaryUser;
  }
}

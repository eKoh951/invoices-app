import { ConfigService } from '@nestjs/config';
import { Auth0Api } from 'src/interfaces/env.config.interface';
import { CACHE_MANAGER, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

import axios, { AxiosRequestConfig } from 'axios';

export class Auth0Utils {
  constructor(
    private configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getAuthToken(): Promise<string> {
    const { clientId, clientSecret, audience } =
      this.configService.get<Auth0Api>('auth0.api');

    const token = await this.cacheManager.get<string>('auth0-token');

    if (!token) {
      const axiosOptions: AxiosRequestConfig = {
        method: 'POST',
        url: 'https://asure.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        data: {
          'client_id': clientId,
          'client_secret': clientSecret,
          'audience': audience,
          'grant_type': 'client_credentials',
        },
      };

      try {
        const { data } = await axios(axiosOptions);

        await this.cacheManager.set('auth0-token', data.access_token, 86400000);

        return data.access_token;
      } catch (error) {
        console.log(error);
        
        throw new HttpException(
          `An error occurred while getting the token`,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      }
    }

    return token;
  }
}

import {
  Injectable,
  BadRequestException,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';

import { UpdateUserDto, UserDto } from './dto/users.dto';

import { Auth0Utils } from '../../../core/utils/auth0.utils';
import { UsersUtilsV1 } from './users.utils';
import { Cache } from 'cache-manager';
import { ManagementClient, ManagementClientOptions } from 'auth0';
import { ConfigService } from '@nestjs/config';
import { Auth0 } from 'src/config/interfaces/env.config.interface';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private usersUtils: UsersUtilsV1,
    private auth0Utils: Auth0Utils,
    private configService: ConfigService
  ) {
    this.init();
  }

  private token: string;
  private auth0Managment: ManagementClient;

  private async init(): Promise<void> {
    this.token = await this.auth0Utils.getAuthToken();
    const { domain } = this.configService.get<Auth0>('auth0');

    const managmentOptions: ManagementClientOptions = {
      token: this.token,
      domain,
    };
    this.auth0Managment = new ManagementClient(managmentOptions);
  }

  async updateUser(
    userId: string,
    body: UpdateUserDto,
    avatarFile: Express.Multer.File
  ): Promise<UserDto> {
    const updates = {
      ...(body.nickname && { nickname: body.nickname }),
      ...(avatarFile && {
        picture: await this.usersUtils.uploadImageToAws(userId, avatarFile),
      }),
    };

    if (!updates.nickname && !updates.picture) {
      throw new BadRequestException('At least one property must be provided');
    }

    const updatedUser = await this.auth0Managment.updateUser(
      { id: userId },
      updates
    );

    await this.cacheManager.set(userId, updatedUser);

    return updatedUser;
  }
}

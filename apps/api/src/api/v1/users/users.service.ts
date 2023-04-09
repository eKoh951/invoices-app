import {
  Injectable,
  BadRequestException,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';

import { UpdateUserDto, UserDto } from './dto/users.dto';

import { UsersUtilsV1 } from './users.utils';
import { Cache } from 'cache-manager';
import { Databases } from 'node-appwrite';
import { AppwriteService } from 'src/modules/appwrite/appwrite.service';
import { ConfigService } from '@nestjs/config';
import { AppWDatabases } from 'src/config/interfaces/env.config.interface';

@Injectable()
export class UsersServiceV1 {
  private readonly appwriteDatabase: Databases;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService,
    private usersUtils: UsersUtilsV1,
    private appwriteService: AppwriteService
  ) {
    this.appwriteDatabase = this.appwriteService.getDataBases();
  }

  async updateUser(
    userId: string,
    body: UpdateUserDto,
    avatarFile: Express.Multer.File
  ) {
    const updates = {
      ...(body.nickname && { nickname: body.nickname }),
      ...(avatarFile && {
        picture: await this.usersUtils.uploadImage(userId, avatarFile),
      }),
    };

    if (!updates.nickname && !updates.picture) {
      throw new BadRequestException('At least one property must be provided');
    }

    const { databaseId, collections } =
      this.configService.get<AppWDatabases>('appwrite.databases');

    const userInDB = await this.appwriteDatabase.getDocument(
      databaseId,
      collections.usersId,
      userId
    ).catch(() => {});

    if (userInDB) {
      const updatedUser = await this.appwriteDatabase.updateDocument(
        databaseId,
        collections.usersId,
        userId,
        updates
      );

      return updatedUser;
    }

    const newUser = await this.appwriteDatabase.createDocument(
      databaseId,
      collections.usersId,
      userId,
      updates
    );

    return newUser;
  }
}

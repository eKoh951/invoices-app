import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UpdateUserDto, UserDto } from './dto/users.dto';

import axios, { AxiosRequestConfig } from 'axios';
import { Auth0Utils } from '../../utils/auth0.utils';
import { UsersUtilsV1 } from './users.utils';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @InjectModel('Users') private usersModel: Model<UserDto>,
    private usersUtils: UsersUtilsV1,
    private auth0Utils: Auth0Utils
  ) {}

  async createUserByEmail(email: string): Promise<UserDto> {
    const username = email.split('@')[0];
    const userInMongo = await this.usersModel.findOne({ email });

    if (userInMongo) {
      throw new BadRequestException(
        'A User with te requested email address is already registered'
      );
    }

    const createdUser = await this.usersModel.create({
      username,
      email,
    });

    return createdUser.toObject({ versionKey: false });
  }

  async getUserByUsernameOrEmail(usernameOrEmail: string): Promise<UserDto> {
    const userInMongo = await this.usersUtils.findUserInMongo(usernameOrEmail);

    return userInMongo.toObject({ versionKey: false });
  }

  async getUserByAuthId(userId: string): Promise<UserDto> {
    const token = await this.auth0Utils.getAuthToken();

    const axiosOptions: AxiosRequestConfig = {
      method: 'GET',
      url: `https://asure.us.auth0.com/api/v2/users/${userId}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const { data } = await axios(axiosOptions);
      const userInMongo = await this.createUserByEmail(data.email);

      return userInMongo;
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occurred while getting the current user`
      );
    }
  }

  async getAllUsers(): Promise<UserDto[]> {
    const allUsers = await this.usersModel.find();

    return allUsers.map((user) => user.toObject({ versionKey: false }));
  }

  async updateUser(
    username: string,
    body: UpdateUserDto,
    avatar: Express.Multer.File
  ): Promise<UserDto> {
    const userInMongo = await this.usersUtils.findUserInMongo(username);

    const { username: usernameBody } = body;
    const updates: Partial<UserDto> = {};

    if (usernameBody !== undefined) {
      updates.username = usernameBody;
    }

    if (avatar !== undefined) {
      const avatarUrl = await this.usersUtils.uploadImageToAws(
        userInMongo.id,
        avatar
      );
      updates.avatar = avatarUrl;
    }

    if (!updates.username && !updates.avatar) {
      throw new BadRequestException('At least one property must be provided');
    }

    const updatedUser = await this.usersModel.findOneAndUpdate(
      { username },
      updates,
      { new: true }
    );

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser.toObject({ versionKey: false });
  }

  async deleteUser(username: string): Promise<UserDto> {
    const userInMongo = await this.usersModel.findOneAndDelete({ username });

    if (!userInMongo) {
      throw new NotFoundException('User not found');
    }

    return userInMongo.toObject({ versionKey: false });
  }
}

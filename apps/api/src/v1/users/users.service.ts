import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UpdateUserDto, UserDto } from './dto/users.dto';

import axios, { AxiosRequestConfig } from 'axios';
import { Auth0Utils } from 'src/utils/auth0.utils';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @InjectModel('Users') private usersModel: Model<UserDto>,
    // private configService: ConfigService,
    private auth0Utils: Auth0Utils
  ) {}

  async createOrGetUserByEmail(email: string): Promise<UserDto> {
    const userInMongo = await this.usersModel.findOne({ email });

    if (!userInMongo) {
      const username = email.split('@')[0];
      const userInMongo = await this.usersModel.create({
        username,
        email,
      });
      return userInMongo.toObject({ versionKey: false });
    }

    return userInMongo.toObject({ versionKey: false });
  }

  async getUserByUsername(username: string): Promise<UserDto> {
    const userInMongo = await this.usersModel.findOne({ username });

    if (!userInMongo) {
      throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
    }

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
      const userInMongo = await this.createOrGetUserByEmail(data.email);

      return userInMongo;
    } catch (error) {
      throw new HttpException(
        `An error occurred while getting the current user`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllUsers(): Promise<UserDto[]> {
    const allUsers = await this.usersModel.find();

    return allUsers.map((user) => user.toObject({ versionKey: false }));
  }

  async updateUser(username: string, body: UpdateUserDto): Promise<UserDto> {
    const { username: usernameBody, avatar } = body;
    const updates: Partial<UserDto> = {};

    if (usernameBody !== undefined) {
      updates.username = usernameBody;
    }

    if (avatar !== undefined) {
      updates.avatar = avatar;
    }

    if (!updates.username && !updates.avatar) {
      throw new HttpException(
        'At least one property must be provided',
        HttpStatus.BAD_REQUEST
      );
    }

    const updatedUser = await this.usersModel.findOneAndUpdate(
      { username },
      updates,
      { new: true }
    );

    if (!updatedUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return updatedUser.toObject({ versionKey: false });
  }

  async deleteUser(username: string) {
    const userInMongo = await this.usersModel.findOneAndDelete({ username });

    if (!userInMongo) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userInMongo.toObject({ versionKey: false });
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UpdateUserDto, UserDto } from './dto/users.dto';

import axios, { AxiosRequestConfig } from 'axios';
import { Auth0Utils } from 'src/utils/auth0.utils';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @InjectModel('Users') private usersModel: Model<UserDto>,
    private configService: ConfigService,
    private auth0Utils: Auth0Utils
  ) {}

  async createOrGetUser(email: string): Promise<UserDto> {
    let userData: UserDto;
    userData = await this.usersModel.findOne({ email });

    if (!userData) {
      const username = email.split('@')[0];
      userData = await this.usersModel.create({
        username,
        email,
      });
    }
    return userData;
  }

  async getUserByAuthId(userId: string): Promise<UserDto> {
    const token = await this.auth0Utils.getAuthToken();
    
    const axiosOptions: AxiosRequestConfig = {
      method: 'GET',
      url: `https://asure.us.auth0.com/api/v2/users/${userId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    };

    try {
      const { data } = await axios(axiosOptions);
      const userData = await this.createOrGetUser(data.email);

      return userData;
    } catch (error) {
      throw new HttpException(
        `An error occurred while getting the current user`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllUsers(): Promise<UserDto[]> {
    const allUsers = await this.usersModel.find();
    
    return allUsers.map((user) => {
      const { admin, username, email, avatar } = user;
      return {
        admin,
        username,
        email,
        avatar,
      }
    });
  }

  async getUser(username: string): Promise<UserDto> {
    const userData = await this.usersModel.findOne({ username });

    if (!userData) {
      throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
    }

    return userData;
  }

  updateUser(username: string, body: UpdateUserDto) {
    return {};
  }

  deleteUser(email: string) {
    return {};
  }
}

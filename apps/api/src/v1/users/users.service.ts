import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UpdateUserDto, UserDto } from './dto/users.dto';

import axios from 'axios';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @InjectModel('Users') private usersModel: Model<UserDto>,
    private configService: ConfigService
  ) {}

  async createOrGetUser(email: string): Promise<UserDto> {
    let userData: UserDto;
    userData = await this.usersModel.findOne({ email });

    if (!userData) {
      const username = email.split('@')[0]
      userData = await this.usersModel.create({
        username,
        email,
      });
    }
    return userData;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const allUsers = await this.usersModel.find()

    return allUsers.map(user => ({
      admin: user.admin,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
    }))
  } 

  async getUser(username: string): Promise<UserDto> {
    const userData = await this.usersModel.findOne({ username })

    if (!userData) {
      throw new HttpException(
        `User not found.`,
        HttpStatus.NOT_FOUND
      )
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

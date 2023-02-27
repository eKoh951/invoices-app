import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersServiceV1 {
  constructor(@InjectModel('Users') private usersModel: Model<UserDto>) {}

  createUser() {
    return {};
  }

  getAllUsers() {
    return {};
  }

  getUser(username: string) {
    return {};
  }

  updateUser(username: string) {
    return {};
  }

  deleteUser(username: string) {
    return {};
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Storage, Users, Account, Databases } from 'node-appwrite';
import { AppWrite } from 'src/config/interfaces/env.config.interface';

@Injectable()
export class AppwriteService {
  private readonly appwrite: Client;

  constructor(private configService: ConfigService) {
    const { endpoint, projectId, apiKey } =
      this.configService.get<AppWrite>('appwrite');

    this.appwrite = new Client();
    this.appwrite.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
  }

  getClient(): Client {
    return this.appwrite;
  }

  getStorage(): Storage {
    return new Storage(this.appwrite);
  }

  getUsers(): Users {
    return new Users(this.appwrite);
  }

  getAccount(): Account {
    return new Account(this.appwrite);
  }

  getDataBases(): Databases {
    return new Databases(this.appwrite);
  }
}

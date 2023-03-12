import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model, mongo } from 'mongoose';
import { Auth0Utils } from '../utils/auth0.utils';
import { InvoicesServiceV1 } from './invoices/invoices.service';
import { UsersServiceV1 } from './users/users.service';
import { UsersUtilsV1 } from './users/users.utils';
import { V1Controller } from './v1.controller';
import { Users, UsersSchema } from './users/schemas/users.schema';
import { Invoices, InvoicesSchema } from './invoices/schemas/invoices.schema';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDtoStub } from '../../test/stubs/v1/users.dto.stub';
import { InvoicesUtilsV1 } from './invoices/invoices.utils';
import { ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor, CacheModule } from '@nestjs/common';

describe('V1Controller', () => {
  let v1Controller: V1Controller;

  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let usersModel: Model<Users>;
  let invoicesModel: Model<Invoices>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    usersModel = mongoConnection.model('Users', UsersSchema);
    invoicesModel = mongoConnection.model('Invoices', InvoicesSchema);

    const app: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register({ isGlobal: true, ttl: 0 })],
      controllers: [V1Controller],
      providers: [
        UsersServiceV1,
        InvoicesServiceV1,
        Auth0Utils,
        UsersUtilsV1,
        InvoicesUtilsV1,
        ConfigService,
        { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
        { provide: getModelToken('Users'), useValue: usersModel },
        { provide: getModelToken('Invoices'), useValue: invoicesModel },
      ],
    }).compile();
    v1Controller = app.get<V1Controller>(V1Controller);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe('POST api/v1/users | create a user in the database', () => {
    it('should return the created user', async () => {
      const createdUser = await v1Controller.createUser(CreateUserDtoStub());

      expect(createdUser).toBeDefined();
      expect(createdUser.email).toBe(CreateUserDtoStub().email);
      expect(createdUser.username).toBe('test1234');
    });
  });
});

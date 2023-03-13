import { Test, TestingModule } from '@nestjs/testing';
import {
  CacheInterceptor,
  CacheModule,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users/schemas/users.schema';
import { Invoices, InvoicesSchema } from './invoices/schemas/invoices.schema';

import { V1Controller } from './v1.controller';
import { UsersServiceV1 } from './users/users.service';
import { InvoicesServiceV1 } from './invoices/invoices.service';
import { UsersUtilsV1 } from './users/users.utils';
import { InvoicesUtilsV1 } from './invoices/invoices.utils';
import { Auth0Utils } from '../utils/auth0.utils';

import { ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import {
  CreateUserDtoStub,
  GetUserParamsStub,
  GetUserParamsStubError,
  UpdateUserDtoStub,
  NewUserDtoStub,
} from '../test/stubs/v1/users.dto.stub';
import {
  CreateInvoiceDtoStub,
  CreateInvoiceParamsStub,
  UpdateInvoiceDtoStub,
} from '../test/stubs/v1/invoices.dto.stub';
import { InvoiceStatus } from './invoices/interfaces/invoices.interface';

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

  describe('U - POST v1/users', (): void => {
    it('should create and return the user', async (): Promise<void> => {
      const createdUser = await v1Controller.createUser(CreateUserDtoStub());

      const username = CreateUserDtoStub().email.split('@')[0];

      expect(createdUser).toBeDefined();
      expect(createdUser).toHaveProperty('email', CreateUserDtoStub().email);
      expect(createdUser).toHaveProperty('username', username);
      expect(createdUser).toHaveProperty('admin', false);
    });

    it('should return an BadRequestException | The user already exists', async () => {
      try {
        await v1Controller.createUser(CreateUserDtoStub());
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toMatch(
          'A User with te requested email address is already registered'
        );
      }
    });
  });

  describe('U - GET v1/users', (): void => {
    it('should return an array of users', async (): Promise<void> => {
      const allUsers = await v1Controller.getAllUsers();

      expect(allUsers).toBeDefined();
      expect(Array.isArray(allUsers)).toBeTruthy();
    });
  });

  describe('U - GET v1/users/:username', (): void => {
    it('should find and return one user', async (): Promise<void> => {
      const userInMongo = await v1Controller.getUser(GetUserParamsStub());

      expect(userInMongo).toBeDefined();
      expect(userInMongo).toHaveProperty('username', GetUserParamsStub().username);
    });

    it('should return a NotFoundException | User not found', async (): Promise<void> => {
      try {
        await v1Controller.getUser(GetUserParamsStubError());
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toMatch('User not found');
      }
    });
  });

  describe('U - PATCH v1/users/:username', (): void => {
    it('should update the username and return the new user', async (): Promise<void> => {
      const updatedUser = await v1Controller.updateUser(
        GetUserParamsStub(),
        UpdateUserDtoStub(),
        undefined
      );

      expect(updatedUser).toBeDefined();
      expect(updatedUser).toHaveProperty('username', NewUserDtoStub().username);
    });

    it('should return a BadRequestException | At least one property must be provided', async (): Promise<void> => {
      try {
        await v1Controller.updateUser(NewUserDtoStub(), {}, undefined);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toMatch('At least one property must be provided');
      }
    });
  });

  describe('U - DELETE v1/users/:username', (): void => {
    it('should find and delete the user', async (): Promise<void> => {
      const deletedUser = await v1Controller.deleteUser(
        NewUserDtoStub().username
      );

      expect(deletedUser).toBeDefined();
      expect(deletedUser).toHaveProperty('username', NewUserDtoStub().username);
    });

    it('should return a NotFoundException | User not found', async (): Promise<void> => {
      try {
        await v1Controller.deleteUser(NewUserDtoStub().username);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toMatch('User not found');
      }
    });
  });

  //////////////////////////////////

  let invoiceId: string;
  let testUsername: string;

  describe('I - POST v1/users/:username/invoices', (): void => {
    it('should create and return the invoice', async (): Promise<void> => {
      await v1Controller.createUser(CreateUserDtoStub());

      const createdInvoice = await v1Controller.createUserInvoice(
        CreateInvoiceParamsStub(),
        CreateInvoiceDtoStub()
      );

      invoiceId = createdInvoice.invoiceId;
      testUsername = CreateInvoiceParamsStub().username;

      expect(createdInvoice).toBeDefined();
      expect(createdInvoice.invoiceId).toEqual(invoiceId);
      expect(createdInvoice.status).toMatch(/^draft|pending|paid$/);
      expect(createdInvoice.itemList.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('I - GET v1/users/:username/invoices', (): void => {
    it('should return all the invoices from a user', async (): Promise<void> => {
      const allInvoices = await v1Controller.getAllUserInvoices(testUsername);

      expect(allInvoices).toBeDefined();
      expect(Array.isArray(allInvoices)).toBeTruthy();
      expect(allInvoices.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('I - GET v1/users/:username/invoices/:invoiceId', (): void => {
    it('should return one invoice from the user', async (): Promise<void> => {
      const invoiceInMongo = await v1Controller.getUserInvoice(
        testUsername,
        invoiceId
      );

      expect(invoiceInMongo).toBeDefined();
      expect(invoiceInMongo.invoiceId).toEqual(invoiceId);
    });
  });

  describe('I - PATCH v1/users/:username/invoices/:invoiceId', (): void => {
    it('should edit and return the invoice', async (): Promise<void> => {
      const updatedInvoice = await v1Controller.updateInvoice(
        testUsername,
        invoiceId,
        UpdateInvoiceDtoStub()
      );

      expect(updatedInvoice).toBeDefined();
      expect(updatedInvoice).toHaveProperty('status', InvoiceStatus.PAID);
    });

    it('sould return a BadRequestException | At least one property must be provided', async (): Promise<void> => {
      try {
        await v1Controller.updateInvoice(testUsername, invoiceId, {});
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toMatch(
          'At least one property must be added when updating the invoice'
        );
      }
    });
  });

  describe('I - DELETE v1/users/:username/invoices/:invoiceId', (): void => {
    it('should find, delete and return the invoice', async (): Promise<void> => {
      const deletedInvoice = await v1Controller.deleteInvoice(
        testUsername,
        invoiceId
      );

      expect(deletedInvoice).toBeDefined();
    });

    it('should return a NotFoundException | Invoice not found', async (): Promise<void> => {
      try {
        await v1Controller.getUserInvoice(testUsername, invoiceId);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toMatch('Invoice not found');
      }
    });
  });
});

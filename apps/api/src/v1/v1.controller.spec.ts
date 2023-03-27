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
import { Invoices, InvoicesSchema } from './invoices/schemas/invoices.schema';

import { V1Controller } from './v1.controller';
import { UsersServiceV1 } from './users/users.service';
import { UsersServiceV1Mock } from '../test/mocks/users.service.mock';
import { InvoicesServiceV1 } from './invoices/invoices.service';
import { UsersUtilsV1 } from './users/users.utils';
import { InvoicesUtilsV1 } from './invoices/invoices.utils';
import { Auth0Utils } from '../utils/auth0.utils';
import { Auth0UtilsMock } from '../test/mocks/auth.utils.mock';

import { ConfigService } from '@nestjs/config';
import { ConfigServiceMock } from '../test/mocks/config.service.mock';
import { APP_INTERCEPTOR } from '@nestjs/core';

import {
  CurrentUserDtoStub,
  UpdateUserDtoStub,
  NewUserDtoStub,
} from '../test/stubs/v1/users.dto.stub';
import {
  CreateInvoiceDtoStub,
  UpdateInvoiceDtoStub,
} from '../test/stubs/v1/invoices.dto.stub';
import { InvoiceStatus } from './invoices/interfaces/invoices.interface';

describe('V1Controller', () => {
  let v1Controller: V1Controller;

  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let invoicesModel: Model<Invoices>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    invoicesModel = mongoConnection.model('Invoices', InvoicesSchema);

    const app: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register({ isGlobal: true, ttl: 0 })],
      controllers: [V1Controller],
      providers: [
        { provide: UsersServiceV1, useClass: UsersServiceV1Mock },
        InvoicesServiceV1,
        { provide: Auth0Utils, useClass: Auth0UtilsMock },
        UsersUtilsV1,
        InvoicesUtilsV1,
        { provide: ConfigService, useValue: ConfigServiceMock },
        { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
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

  describe('U - GET v1/users/', (): void => {
    it('should find and return the current auth0 user', async (): Promise<void> => {
      const auth0User = v1Controller.getUser(CurrentUserDtoStub());

      expect(auth0User).toBeDefined();
      expect(auth0User).toHaveProperty('email', CurrentUserDtoStub().email);
      expect(auth0User).toHaveProperty('user_id', CurrentUserDtoStub().user_id);
      expect(auth0User).toHaveProperty(
        'nickname',
        CurrentUserDtoStub().nickname
      );
    });
  });

  describe('U - PATCH v1/users/', (): void => {
    it('should update the username and return the new user', async (): Promise<void> => {
      const updatedUser = await v1Controller.updateUser(
        CurrentUserDtoStub(),
        UpdateUserDtoStub(),
        undefined
      );

      expect(updatedUser).toBeDefined();
      expect(updatedUser).toHaveProperty('nickname', NewUserDtoStub().nickname);
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

  //////////////////////////////////

  let invoiceId: string;

  describe('I - POST v1/invoices', (): void => {
    it('should create and return the invoice', async (): Promise<void> => {
      const createdInvoice = await v1Controller.createUserInvoice(
        CurrentUserDtoStub(),
        CreateInvoiceDtoStub()
      );

      invoiceId = createdInvoice.invoiceId;

      expect(createdInvoice).toBeDefined();
      expect(createdInvoice.invoiceId).toEqual(invoiceId);
      expect(createdInvoice.status).toMatch(/^draft|pending|paid$/);
      expect(createdInvoice.itemList.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('I - GET v1/invoices', (): void => {
    it('should return all the invoices from a user', async (): Promise<void> => {
      const allInvoices = await v1Controller.getAllUserInvoices(
        CurrentUserDtoStub()
      );

      expect(allInvoices).toBeDefined();
      expect(Array.isArray(allInvoices)).toBeTruthy();
      expect(allInvoices.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('I - GET v1/invoices/:invoiceId', (): void => {
    it('should return one invoice from the user', async (): Promise<void> => {
      const invoiceInMongo = await v1Controller.getUserInvoice(
        CurrentUserDtoStub(),
        invoiceId
      );

      expect(invoiceInMongo).toBeDefined();
      expect(invoiceInMongo.invoiceId).toEqual(invoiceId);
    });
  });

  describe('I - PATCH v1/invoices/:invoiceId', (): void => {
    it('should edit and return the invoice', async (): Promise<void> => {
      const updatedInvoice = await v1Controller.updateInvoice(
        CurrentUserDtoStub(),
        invoiceId,
        UpdateInvoiceDtoStub()
      );

      expect(updatedInvoice).toBeDefined();
      expect(updatedInvoice).toHaveProperty('status', InvoiceStatus.PAID);
    });

    it('sould return a BadRequestException | At least one property must be provided', async (): Promise<void> => {
      try {
        await v1Controller.updateInvoice(CurrentUserDtoStub(), invoiceId, {});
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toMatch(
          'At least one property must be added when updating the invoice'
        );
      }
    });
  });

  describe('I - DELETE v1/invoices/:invoiceId', (): void => {
    it('should find, delete and return the invoice', async (): Promise<void> => {
      const deletedInvoice = await v1Controller.deleteInvoice(
        CurrentUserDtoStub(),
        invoiceId
      );

      expect(deletedInvoice).toBeDefined();
    });

    it('should return a NotFoundException | Invoice not found', async (): Promise<void> => {
      try {
        await v1Controller.getUserInvoice(CurrentUserDtoStub(), invoiceId);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toMatch('Invoice not found');
      }
    });
  });
});

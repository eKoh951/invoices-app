import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Patch,
  Delete,
  UseInterceptors,
  CacheInterceptor,
  UploadedFile,
} from '@nestjs/common';

import { UsersServiceV1 } from './users/users.service';
import {
  CreateUserDto,
  GetUserParams,
  UpdateUserDto,
  UserDto,
} from './users/dto/users.dto';

import { InvoicesServiceV1 } from './invoices/invoices.service';
import {
  InvoiceDto,
  CreateInvoiceDto,
  CreateInvoiceParams,
  UpdateInvoiceDto,
} from './invoices/dto/invoices.dto';

import {
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { ApiOkResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({ path: 'users', version: '1' })
@UseInterceptors(CacheInterceptor)
export class V1Controller {
  constructor(
    private readonly usersService: UsersServiceV1,
    private readonly invoicesService: InvoicesServiceV1
  ) {}

  ////////////// api/v1/users
  @Post()
  @ApiTags('Users')
  @ApiOperation({ summary: 'Create a user in the database' })
  @ApiOkResponse({ description: 'User successfully registered', type: UserDto })
  createUser(@Body() body: CreateUserDto): Promise<UserDto> {
    return this.usersService.createUserByEmail(body.email);
  }

  ////////////// api/v1/users
  @Get()
  @ApiTags('Users')
  @ApiOperation({ summary: 'Gets all available users' })
  @ApiOkResponse({
    description: 'Successfully obtained users',
    type: [UserDto],
  })
  getAllUsers(): Promise<UserDto[]> {
    return this.usersService.getAllUsers();
  }

  ////////////// api/v1/users/:username
  @Get(':username')
  @ApiTags('Users')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Gets the requested user' })
  @ApiOkResponse({ description: 'Successfully obtained user', type: UserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  getUser(@Param() params: GetUserParams): Promise<UserDto> {
    return this.usersService.getUserByUsername(params.username);
  }

  ////////////// api/v1/users/:username
  @Patch(':username')
  @ApiTags('Users')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Update the username or avatar of the user' })
  @ApiOkResponse({ description: 'Successfully updated user', type: UserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({
    description: 'At least one property must be provided',
  })
  @UseInterceptors(FileInterceptor('avatar'))
  updateUser(
    @Param() params: GetUserParams,
    @Body() body: UpdateUserDto,
    @UploadedFile() avatar: Express.Multer.File
  ): Promise<UserDto> {
    return this.usersService.updateUser(params.username, body, avatar);
  }

  ////////////// api/v1/users/:username
  @Delete(':username')
  @ApiTags('Users')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Permanently deletes the user' })
  @ApiOkResponse({ description: 'Successfully deleted user', type: UserDto })
  deleteUser(@Param('username') username: string): Promise<UserDto> {
    return this.usersService.deleteUser(username);
  }

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////// api/v1/users/:username/invoices
  @Post(':username/invoices')
  @ApiBody({ type: CreateInvoiceDto })
  @ApiTags('Invoices')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Creates an invoice for the selected user' })
  @ApiOkResponse({
    description: 'Successfully created invoice',
    type: InvoiceDto,
  })
  createUserInvoice(
    @Param() params: CreateInvoiceParams,
    @Body() invoiceData: CreateInvoiceDto
  ) {
    return this.invoicesService.createUserInvoice(params.username, invoiceData);
  }

  ////////////// api/v1/users/:username/invoices
  @Get(':username/invoices')
  @ApiTags('Invoices')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Gets all the invoices of a User' })
  @ApiOkResponse({
    description: 'Successfully obtained invoices',
    type: [CreateInvoiceDto],
  })
  getAllUserInvoices(@Param('username') username: string) {
    return this.invoicesService.getAllUserInvoices(username);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Get(':username/invoices/:invoiceId')
  @ApiTags('Invoices')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiParam({
    name: 'invoiceId',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Obtain a specific invoice from the user' })
  @ApiOkResponse({
    description: 'Successfully obtained invoice',
    type: CreateInvoiceDto,
  })
  getUserInvoice(
    @Param('username') username: string,
    @Param('invoiceId') invoiceId: string
  ) {
    return this.invoicesService.getUserInvoice(username, invoiceId);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Patch(':username/invoices/:invoiceId')
  @ApiTags('Invoices')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiParam({
    name: 'invoiceId',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Edit an invoice data' })
  @ApiOkResponse({
    description: 'Successfully updated invoice',
    type: CreateInvoiceDto,
  })
  updateInvoice(
    @Param('username') username: string,
    @Param('invoiceId') invoiceId: string,
    @Body() invoiceData: UpdateInvoiceDto
  ) {
    return this.invoicesService.updateInvoice(username, invoiceId, invoiceData);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Delete(':username/invoices/:invoiceId')
  @ApiTags('Invoices')
  @ApiParam({
    name: 'username',
    type: 'string',
    required: true,
  })
  @ApiParam({
    name: 'invoiceId',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Delete an invoice' })
  @ApiOkResponse({
    description: 'Successfully deleted invoice',
    type: CreateInvoiceDto,
  })
  deleteInvoice(
    @Param('username') username: string,
    @Param('invoiceId') invoiceId: string
  ) {
    return this.invoicesService.deleteInvoice(username, invoiceId);
  }
}

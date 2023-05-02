import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { UsersServiceV1 } from './users/users.service';
import { UserDto, UpdateUserDto, PasswordRecoveryDto } from './users/dto/users.dto';

import { InvoicesServiceV1 } from './invoices/invoices.service';
import {
  InvoiceDto,
  CreateInvoiceDto,
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
import { CurrentUser } from '../../core/decorators/current-user.decorator';

@Controller({ version: '1' })
export class V1Controller {
  constructor(
    private readonly usersService: UsersServiceV1,
    private readonly invoicesService: InvoicesServiceV1
  ) {}

  ////////////// api/v1/users/@me
  @Get('users/@me')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Gets the requested user' })
  @ApiOkResponse({ description: 'Successfully obtained user', type: UserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  getUser(@CurrentUser() user: UserDto): UserDto {
    return user;
  }

  ////////////// api/v1/users/@me
  @Patch('users/@me')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Update the username or avatar of the user' })
  @ApiOkResponse({ description: 'Successfully updated user', type: UserDto })
  @ApiBadRequestResponse({
    description: 'At least one property must be provided',
  })
  @UseInterceptors(FileInterceptor('picture'))
  updateUser(
    @CurrentUser() { user_id }: UserDto,
    @Body() body: UpdateUserDto,
    @UploadedFile() avatar: Express.Multer.File
  ): Promise<UserDto> {
    return this.usersService.updateUser(user_id, body, avatar);
  }

  ////////////// api/v1/users/@me/password_recovery
  @Post('users/@me/password_recovery')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Send an email to reset password to current user' })
  @ApiOkResponse({ description: 'The password reset email has been sent.', type: PasswordRecoveryDto })
  getPasswordRecovery(
    @CurrentUser() user: UserDto
  ): Promise<PasswordRecoveryDto> {
    return this.usersService.sendRecoveryEmail(user);
  }

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////// api/v1/invoices
  @Post('invoices')
  @ApiBody({ type: CreateInvoiceDto })
  @ApiTags('Invoices')
  @ApiOperation({ summary: 'Creates an invoice for the current user' })
  @ApiOkResponse({
    description: 'Successfully created invoice',
    type: InvoiceDto,
  })
  createUserInvoice(
    @CurrentUser() { email }: UserDto,
    @Body() invoiceData: CreateInvoiceDto
  ): Promise<InvoiceDto> {
    return this.invoicesService.createUserInvoice(email, invoiceData);
  }

  ////////////// api/v1/invoices
  @Get('invoices')
  @ApiTags('Invoices')
  @ApiOperation({ summary: 'Gets all the invoices of the current User' })
  @ApiOkResponse({
    description: 'Successfully obtained invoices',
    type: [CreateInvoiceDto],
  })
  getAllUserInvoices(@CurrentUser() { email }: UserDto): Promise<InvoiceDto[]> {
    return this.invoicesService.getAllUserInvoices(email);
  }

  ////////////// api/v1/invoices/:invoiceId
  @Get('invoices/:invoiceId')
  @ApiTags('Invoices')
  @ApiParam({
    name: 'invoiceId',
    type: 'string',
    required: true,
  })
  @ApiOperation({ summary: 'Obtain a specific invoice from the current user' })
  @ApiOkResponse({
    description: 'Successfully obtained invoice',
    type: CreateInvoiceDto,
  })
  getUserInvoice(
    @CurrentUser() { email }: UserDto,
    @Param('invoiceId') invoiceId: string
  ): Promise<InvoiceDto> {
    return this.invoicesService.getUserInvoice(email, invoiceId);
  }

  ////////////// api/v1/invoices/:invoiceId
  @Patch('invoices/:invoiceId')
  @ApiTags('Invoices')
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
    @CurrentUser() { email }: UserDto,
    @Param('invoiceId') invoiceId: string,
    @Body() invoiceData: UpdateInvoiceDto
  ): Promise<InvoiceDto> {
    return this.invoicesService.updateInvoice(email, invoiceId, invoiceData);
  }

  ////////////// api/v1/invoices/:invoiceId
  @Delete('invoices/:invoiceId')
  @ApiTags('Invoices')
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
    @CurrentUser() { email }: UserDto,
    @Param('invoiceId') invoiceId: string
  ): Promise<InvoiceDto> {
    return this.invoicesService.deleteInvoice(email, invoiceId);
  }
}

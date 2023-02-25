import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Patch,
  Delete,
} from "@nestjs/common";

import { UsersServiceV1 } from "./users.service";
import { UserDto } from "./dto/users.dto";

import { InvoicesServiceV1 } from "../invoices/invoices.service";
import { InvoiceDto } from "../invoices/dto/invoices.dto";

import { ApiTags, ApiBody, ApiOperation, ApiParam } from "@nestjs/swagger";
import { ApiOkResponse } from "@nestjs/swagger";

@Controller({ path: "users", version: "1" })
export class UsersControllerV1 {
  constructor(
    private readonly usersService: UsersServiceV1,
    private readonly invoicesService: InvoicesServiceV1
  ) {}

  ////////////// api/v1/users
  @Post()
  @ApiTags("Users")
  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: "Create a user in the database" })
  @ApiOkResponse({ description: "User successfully registered", type: UserDto })
  createUser() {
    return this.usersService.createUser();
  }

  ////////////// api/v1/users
  @Get()
  @ApiTags("Users")
  @ApiOperation({ summary: "Gets all available users" })
  @ApiOkResponse({
    description: "Successfully obtained users",
    type: [UserDto],
  })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  ////////////// api/v1/users/:username
  @Get(":username")
  @ApiTags("Users")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Gets the requested user" })
  @ApiOkResponse({ description: "Successfully obtained user", type: UserDto })
  getUser(@Param("username") username: string) {
    return this.usersService.getUser(username);
  }

  ////////////// api/v1/users/:username
  @Patch(":username")
  @ApiBody({ type: UserDto })
  @ApiTags("Users")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Update the username or avatar of the user" })
  @ApiOkResponse({ description: "Successfully updated user", type: UserDto })
  updateUser(@Param("username") username: string) {
    return this.usersService.updateUser(username);
  }

  ////////////// api/v1/users/:username
  @Delete(":username")
  @ApiTags("Users")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Permanently deletes the user" })
  @ApiOkResponse({ description: "Successfully deleted user", type: UserDto })
  deleteUser(@Param("username") username: string) {
    return this.usersService.deleteUser(username);
  }

  ////////////// api/v1/users/:username/invoices
  @Post(":username/invoices")
  @ApiBody({ type: InvoiceDto })
  @ApiTags("Invoices")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Creates an invoice for the selected user" })
  @ApiOkResponse({
    description: "Successfully created invoice",
    type: InvoiceDto,
  })
  createUserInvoice(@Param("username") username: string) {
    return this.invoicesService.createUserInvoice(username);
  }

  ////////////// api/v1/users/:username/invoices
  @Get(":username/invoices")
  @ApiTags("Invoices")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Gets all the invoices of a User" })
  @ApiOkResponse({
    description: "Successfully obtained invoices",
    type: [InvoiceDto],
  })
  getAllUserInvoices(@Param("username") username: string) {
    return this.invoicesService.getAllUserInvoices(username);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Get(":username/invoices/:invoiceId")
  @ApiTags("Invoices")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiParam({
    name: "invoiceId",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Obtain a specific invoice from the user" })
  @ApiOkResponse({
    description: "Successfully obtained invoice",
    type: InvoiceDto,
  })
  getUserInvoice(
    @Param("username") username: string,
    @Param("invoiceId") invoiceId: string
  ) {
    return this.invoicesService.getUserInvoice(username, invoiceId);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Patch(":username/invoices/:invoiceId")
  @ApiTags("Invoices")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiParam({
    name: "invoiceId",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Edit an invoice data" })
  @ApiOkResponse({
    description: "Successfully updated invoice",
    type: InvoiceDto,
  })
  updateInvoice(
    @Param("username") username: string,
    @Param("invoiceId") invoiceId: string
  ) {
    return this.invoicesService.updateInvoice(username, invoiceId);
  }

  ////////////// api/v1/users/:username/invoices/:invoiceId
  @Delete(":username/invoices/:invoiceId")
  @ApiTags("Invoices")
  @ApiParam({
    name: "username",
    type: "string",
    required: true,
  })
  @ApiParam({
    name: "invoiceId",
    type: "string",
    required: true,
  })
  @ApiOperation({ summary: "Delete an invoice" })
  @ApiOkResponse({
    description: "Successfully deleted invoice",
    type: InvoiceDto,
  })
  deleteInvoice(
    @Param("username") username: string,
    @Param("invoiceId") invoiceId: string
  ) {
    return this.invoicesService.deleteInvoice(username, invoiceId);
  }
}

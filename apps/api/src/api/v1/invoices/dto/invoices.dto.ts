import {
  IsString,
  IsNotEmptyObject,
  IsArray,
  IsDate,
  ArrayMinSize,
  IsNumberString,
  IsEmail,
  IsEnum,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

import {
  PaymentTermsOptions,
  InvoiceStatus,
} from '../interfaces/invoices.interface';

export class BillFromDto {
  @IsString()
  @ApiProperty()
  street: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  postCode: string;

  @IsString()
  @ApiProperty()
  country: string;
}

export class BillToDto {
  @IsString()
  @ApiProperty()
  clientName: string;

  @IsEmail()
  @ApiProperty()
  clientEmail: string;

  @IsString()
  @ApiProperty()
  street: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  postCode: string;

  @IsString()
  @ApiProperty()
  country: string;
}

export class ItemListDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumberString()
  @ApiProperty()
  quantity: number;

  @IsNumberString()
  @ApiProperty()
  price: number;
}

export class InvoiceDto {
  @ApiProperty()
  invoiceId: string;

  @IsEmail()
  @ApiProperty()
  ownerEmail: string;

  @IsString()
  @IsEnum(InvoiceStatus)
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmptyObject()
  @Type(() => BillFromDto)
  @ApiProperty()
  billFrom: BillFromDto;

  @IsNotEmptyObject()
  @Type(() => BillToDto)
  @ApiProperty()
  billTo: BillToDto;

  @IsNumberString()
  @IsEnum(PaymentTermsOptions)
  @ApiProperty()
  paymentTerms: PaymentTermsOptions;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemListDto)
  @ApiProperty()
  itemList: ItemListDto[];

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}

export class CreateInvoiceDto {
  @IsString()
  @IsEnum(InvoiceStatus)
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmptyObject()
  @Type(() => BillFromDto)
  @ApiProperty()
  billFrom: BillFromDto;

  @IsNotEmptyObject()
  @Type(() => BillToDto)
  @ApiProperty()
  billTo: BillToDto;

  @IsNumberString()
  @IsEnum(PaymentTermsOptions)
  @ApiProperty()
  paymentTerms: PaymentTermsOptions;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ItemListDto)
  @ApiProperty()
  itemList: ItemListDto[];
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}

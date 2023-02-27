import { IsString, IsNotEmptyObject, IsArray, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmptyObject()
  @ApiProperty()
  billFrom: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @IsNotEmptyObject()
  @ApiProperty()
  billTo: {
    clientName: string;
    clientEmail: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @IsString()
  @ApiProperty()
  paymentTerms: string;

  @IsArray()
  @ApiProperty()
  itemList: {
    name: string;
    quantity: number;
    price: number;
  }[];

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}

import {} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  billFrom: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @ApiProperty()
  billTo: {
    clientName: string;
    clientEmail: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @ApiProperty()
  date: string;

  @ApiProperty()
  paymentTerms: string;

  @ApiProperty()
  itemList: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

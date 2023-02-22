import {} from "class-validator";

export class InvoiceDto {
  id: string;
  description: string;
  billFrom: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    clientEmail: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  date: string;
  paymentTerms: string;
  itemList: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

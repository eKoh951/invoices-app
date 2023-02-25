import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Invoices {
  @Prop()
  id: string;

  @Prop()
  status: string;

  @Prop()
  description: string;

  @Prop()
  billFrom: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @Prop()
  billTo: {
    clientName: string;
    clientEmail: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  @Prop()
  date: string;

  @Prop()
  paymentTerms: string;

  @Prop([
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ])
  itemList: Record<string, any>[];
}

export const InvoicesSchema = SchemaFactory.createForClass(Invoices);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Users {
  @Prop()
  id: string;

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

export const UsersSchema = SchemaFactory.createForClass(Users);

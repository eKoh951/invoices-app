import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: true, updatedAt: true }})
export class Invoices {
  @Prop({ required: true, unique: true })
  invoiceId: string;

  @Prop({ required: true, unique: true })
  ownerId: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  description: string;

  @Prop(
    raw({
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
      country: { type: String },
    })
  )
  billFrom: Record<string, string>;

  @Prop(
    raw({
      clientName: { type: String },
      clientEmail: { type: String },
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
      country: { type: String },
    })
  )
  billTo: Record<string, string>;

  @Prop()
  paymentTerms: string;

  @Prop(
    [raw({
      name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
    })]
  )
  itemList: Record<string, any>[];
}

export const InvoicesSchema = SchemaFactory.createForClass(Invoices);

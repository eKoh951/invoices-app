import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Users {

  @Prop({ required: true, default: false })
  admin: boolean;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  avatar: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

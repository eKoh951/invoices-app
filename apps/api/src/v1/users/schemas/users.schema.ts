import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Users {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop()
  email: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

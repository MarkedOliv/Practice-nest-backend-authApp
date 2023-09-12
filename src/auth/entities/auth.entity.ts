import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose/dist/decorators';

@Schema()
export class User {
  _id?: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ minlength: 6, required: true })
  password?: string;

  @Prop({ type: [String], default: ['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

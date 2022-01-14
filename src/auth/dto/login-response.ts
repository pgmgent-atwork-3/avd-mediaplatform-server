import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => User)
  user: User;
}

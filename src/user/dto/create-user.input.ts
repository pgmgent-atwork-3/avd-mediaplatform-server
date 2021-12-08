import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  firstname: string;

  @Field(() => String, { nullable: false })
  lastname: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => String, { nullable: false })
  profile_picture: string;

  @Field(() => String, { nullable: false })
  account_type: string;
}

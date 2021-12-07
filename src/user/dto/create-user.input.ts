import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  firstname: string;

  @Field(() => String, { nullable: false })
  lastname: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => Int, { nullable: false })
  profile_picture: string;

  @Field(() => String, { nullable: false })
  account_type: string;
}

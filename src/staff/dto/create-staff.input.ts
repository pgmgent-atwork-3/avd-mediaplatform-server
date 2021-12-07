import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStaffInput {
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
}

import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLiveInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;
}

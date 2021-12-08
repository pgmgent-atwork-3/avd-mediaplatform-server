import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field(() => String, { nullable: false })
  name: string;
}

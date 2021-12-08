import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLiveInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  url: string;
}

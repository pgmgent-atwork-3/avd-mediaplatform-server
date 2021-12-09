import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLiveHistoryInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  thumbnail: string;

  @Field(() => String)
  creator_name: string;
}

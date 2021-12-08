import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => Int, { nullable: false })
  videoId: number;

  @Field(() => Int, { nullable: false })
  userId: number;
}

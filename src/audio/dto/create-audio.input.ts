import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAudioInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  soundcloud_url: string;
}

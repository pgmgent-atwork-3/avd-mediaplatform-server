import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAudioPictureInput {
  @Field(() => String, { nullable: false })
  url: string;
}

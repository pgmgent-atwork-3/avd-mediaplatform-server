import { CreateAudioPictureInput } from './create-audio-picture.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAudioPictureInput extends PartialType(CreateAudioPictureInput) {
  @Field(() => Int)
  id: number;
}

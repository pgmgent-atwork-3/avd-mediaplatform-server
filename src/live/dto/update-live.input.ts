import { CreateLiveInput } from './create-live.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLiveInput extends PartialType(CreateLiveInput) {
  @Field(() => Int)
  id: number;
}

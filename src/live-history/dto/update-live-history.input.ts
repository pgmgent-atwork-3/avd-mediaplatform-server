import { CreateLiveHistoryInput } from './create-live-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLiveHistoryInput extends PartialType(CreateLiveHistoryInput) {
  @Field(() => Int)
  id: number;
}

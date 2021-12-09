import { CreateLiveUpcomingInput } from './create-live-upcoming.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLiveUpcomingInput extends PartialType(CreateLiveUpcomingInput) {
  @Field(() => Int)
  id: number;
}

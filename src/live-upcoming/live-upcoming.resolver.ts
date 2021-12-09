import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveUpcomingService } from './live-upcoming.service';
import { LiveUpcoming } from './entities/live-upcoming.entity';
import { CreateLiveUpcomingInput } from './dto/create-live-upcoming.input';
import { UpdateLiveUpcomingInput } from './dto/update-live-upcoming.input';

@Resolver(() => LiveUpcoming)
export class LiveUpcomingResolver {
  constructor(private readonly liveUpcomingService: LiveUpcomingService) {}

  @Mutation(() => LiveUpcoming)
  createLiveUpcoming(@Args('createLiveUpcomingInput') createLiveUpcomingInput: CreateLiveUpcomingInput) {
    return this.liveUpcomingService.create(createLiveUpcomingInput);
  }

  @Query(() => [LiveUpcoming], { name: 'liveUpcoming' })
  findAll() {
    return this.liveUpcomingService.findAll();
  }

  @Query(() => LiveUpcoming, { name: 'liveUpcoming' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveUpcomingService.findOne(id);
  }

  @Mutation(() => LiveUpcoming)
  updateLiveUpcoming(@Args('updateLiveUpcomingInput') updateLiveUpcomingInput: UpdateLiveUpcomingInput) {
    return this.liveUpcomingService.update(updateLiveUpcomingInput.id, updateLiveUpcomingInput);
  }

  @Mutation(() => LiveUpcoming)
  removeLiveUpcoming(@Args('id', { type: () => Int }) id: number) {
    return this.liveUpcomingService.remove(id);
  }
}

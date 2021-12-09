import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveHistoryService } from './live-history.service';
import { LiveHistory } from './entities/live-history.entity';
import { CreateLiveHistoryInput } from './dto/create-live-history.input';
import { UpdateLiveHistoryInput } from './dto/update-live-history.input';

@Resolver(() => LiveHistory)
export class LiveHistoryResolver {
  constructor(private readonly liveHistoryService: LiveHistoryService) {}

  @Mutation(() => LiveHistory)
  createLiveHistory(
    @Args('createLiveHistoryInput')
    createLiveHistoryInput: CreateLiveHistoryInput,
  ) {
    return this.liveHistoryService.create(createLiveHistoryInput);
  }

  @Query(() => [LiveHistory], { name: 'liveHistories' })
  findAll() {
    return this.liveHistoryService.findAll();
  }

  @Query(() => LiveHistory, { name: 'liveHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveHistoryService.findOne(id);
  }

  @Mutation(() => LiveHistory)
  updateLiveHistory(
    @Args('updateLiveHistoryInput')
    updateLiveHistoryInput: UpdateLiveHistoryInput,
  ) {
    return this.liveHistoryService.update(
      updateLiveHistoryInput.id,
      updateLiveHistoryInput,
    );
  }

  @Mutation(() => LiveHistory)
  removeLiveHistory(@Args('id', { type: () => Int }) id: number) {
    return this.liveHistoryService.remove(id);
  }
}

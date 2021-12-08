import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveService } from './live.service';
import { Live } from './entities/live.entity';
import { CreateLiveInput } from './dto/create-live.input';
import { UpdateLiveInput } from './dto/update-live.input';

@Resolver(() => Live)
export class LiveResolver {
  constructor(private readonly liveService: LiveService) {}

  @Mutation(() => Live)
  createLive(@Args('createLiveInput') createLiveInput: CreateLiveInput) {
    return this.liveService.create(createLiveInput);
  }

  @Query(() => [Live], { name: 'lives' })
  findAll() {
    return this.liveService.findAll();
  }

  @Query(() => Live, { name: 'live' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveService.findOne(id);
  }

  @Mutation(() => Live)
  updateLive(@Args('updateLiveInput') updateLiveInput: UpdateLiveInput) {
    return this.liveService.update(updateLiveInput.id, updateLiveInput);
  }

  @Mutation(() => Live)
  removeLive(@Args('id', { type: () => Int }) id: number) {
    return this.liveService.remove(id);
  }
}

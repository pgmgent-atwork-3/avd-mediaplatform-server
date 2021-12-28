import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveHistoryService } from './live-history.service';
import { LiveHistory } from './entities/live-history.entity';
import { CreateLiveHistoryInput } from './dto/create-live-history.input';
import { UpdateLiveHistoryInput } from './dto/update-live-history.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => LiveHistory)
export class LiveHistoryResolver {
  constructor(private readonly liveHistoryService: LiveHistoryService) {}

  @Mutation(() => LiveHistory)
  @UseGuards(RoleGuard(Role.Admin))
  createLiveHistory(
    @Args('createLiveHistoryInput')
    createLiveHistoryInput: CreateLiveHistoryInput,
  ) {
    return this.liveHistoryService.create(createLiveHistoryInput);
  }

  @Query(() => [LiveHistory], { name: 'liveHistories' })
  @UseGuards(RoleGuard(Role.User))
  findAll() {
    return this.liveHistoryService.findAll();
  }

  @Query(() => LiveHistory, { name: 'liveHistory' })
  @UseGuards(RoleGuard(Role.User))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveHistoryService.findOne(id);
  }

  @Mutation(() => LiveHistory)
  @UseGuards(RoleGuard(Role.Admin))
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
  @UseGuards(RoleGuard(Role.Admin))
  removeLiveHistory(@Args('id', { type: () => Int }) id: number) {
    return this.liveHistoryService.remove(id);
  }
}

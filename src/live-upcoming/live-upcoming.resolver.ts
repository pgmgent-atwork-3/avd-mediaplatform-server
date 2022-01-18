import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveUpcomingService } from './live-upcoming.service';
import { LiveUpcoming } from './entities/live-upcoming.entity';
import { CreateLiveUpcomingInput } from './dto/create-live-upcoming.input';
import { UpdateLiveUpcomingInput } from './dto/update-live-upcoming.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';

@Resolver(() => LiveUpcoming)
export class LiveUpcomingResolver {
  constructor(private readonly liveUpcomingService: LiveUpcomingService) {}

  @Mutation(() => LiveUpcoming)
  @UseGuards(RoleGuard(Role.Admin))
  createLiveUpcoming(
    @Args('createLiveUpcomingInput')
    createLiveUpcomingInput: CreateLiveUpcomingInput,
  ): Promise<LiveUpcoming> {
    return this.liveUpcomingService.create(createLiveUpcomingInput);
  }

  @Query(() => [LiveUpcoming], { name: 'liveUpcomings' })
  @UseGuards(RoleGuard(Role.User))
  findAll(): Promise<LiveUpcoming[]> {
    return this.liveUpcomingService.findAll();
  }

  @Query(() => LiveUpcoming, { name: 'liveUpcoming' })
  @UseGuards(RoleGuard(Role.User))
  findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<LiveUpcoming> {
    return this.liveUpcomingService.findOne(id);
  }

  @Mutation(() => LiveUpcoming)
  @UseGuards(RoleGuard(Role.Admin))
  updateLiveUpcoming(
    @Args('updateLiveUpcomingInput')
    updateLiveUpcomingInput: UpdateLiveUpcomingInput,
  ): Promise<LiveUpcoming> {
    return this.liveUpcomingService.update(
      updateLiveUpcomingInput.id,
      updateLiveUpcomingInput,
    );
  }

  @Mutation(() => LiveUpcoming)
  @UseGuards(RoleGuard(Role.Admin))
  removeLiveUpcoming(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<LiveUpcoming> {
    return this.liveUpcomingService.remove(id);
  }
}

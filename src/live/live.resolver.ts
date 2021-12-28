import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveService } from './live.service';
import { Live } from './entities/live.entity';
import { CreateLiveInput } from './dto/create-live.input';
import { UpdateLiveInput } from './dto/update-live.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Live)
export class LiveResolver {
  constructor(private readonly liveService: LiveService) {}

  @Mutation(() => Live)
  @UseGuards(RoleGuard(Role.Admin))
  createLive(@Args('createLiveInput') createLiveInput: CreateLiveInput) {
    return this.liveService.create(createLiveInput);
  }

  @Query(() => [Live], { name: 'lives' })
  @UseGuards(RoleGuard(Role.User))
  findAll() {
    return this.liveService.findAll();
  }

  @Query(() => Live, { name: 'live' })
  @UseGuards(RoleGuard(Role.User))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveService.findOne(id);
  }

  @Mutation(() => Live)
  @UseGuards(RoleGuard(Role.Admin))
  updateLive(@Args('updateLiveInput') updateLiveInput: UpdateLiveInput) {
    return this.liveService.update(updateLiveInput.id, updateLiveInput);
  }

  @Mutation(() => Live)
  @UseGuards(RoleGuard(Role.Admin))
  removeLive(@Args('id', { type: () => Int }) id: number) {
    return this.liveService.remove(id);
  }
}

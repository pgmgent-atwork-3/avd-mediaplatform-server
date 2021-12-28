import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AudioService } from './audio.service';
import { Audio } from './entities/audio.entity';
import { CreateAudioInput } from './dto/create-audio.input';
import { UpdateAudioInput } from './dto/update-audio.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Audio)
export class AudioResolver {
  constructor(private readonly audioService: AudioService) {}

  @Mutation(() => Audio)
  @UseGuards(RoleGuard(Role.Admin))
  createAudio(@Args('createAudioInput') createAudioInput: CreateAudioInput) {
    return this.audioService.create(createAudioInput);
  }

  @Query(() => [Audio], { name: 'audios' })
  @UseGuards(RoleGuard(Role.User))
  findAll() {
    return this.audioService.findAll();
  }

  @Query(() => Audio, { name: 'audio' })
  @UseGuards(RoleGuard(Role.User))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.audioService.findOne(id);
  }

  @Mutation(() => Audio)
  @UseGuards(RoleGuard(Role.Admin))
  updateAudio(@Args('updateAudioInput') updateAudioInput: UpdateAudioInput) {
    return this.audioService.update(updateAudioInput.id, updateAudioInput);
  }

  @Mutation(() => Audio)
  @UseGuards(RoleGuard(Role.Admin))
  removeAudio(@Args('id', { type: () => Int }) id: number) {
    return this.audioService.remove(id);
  }
}

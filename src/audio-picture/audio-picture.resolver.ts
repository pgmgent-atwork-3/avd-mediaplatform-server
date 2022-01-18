import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AudioPictureService } from './audio-picture.service';
import { AudioPicture } from './entities/audio-picture.entity';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Resolver(() => AudioPicture)
export class AudioPictureResolver {
  constructor(private readonly audioPictureService: AudioPictureService) {}

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  createAudioPicture(
    @Args('createAudioPictureInput')
    createAudioPictureInput: CreateAudioPictureInput,
  ): Promise<AudioPicture> {
    return this.audioPictureService.create(createAudioPictureInput);
  }

  @Query(() => [AudioPicture], { name: 'audioPicture' })
  @UseGuards(RoleGuard(Role.Admin))
  findAll(): Promise<AudioPicture[]> {
    return this.audioPictureService.findAll();
  }

  @Query(() => AudioPicture, { name: 'audioPicture' })
  @UseGuards(RoleGuard(Role.User))
  findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<AudioPicture> {
    return this.audioPictureService.findOne(id);
  }

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  updateAudioPicture(
    @Args('updateAudioPictureInput')
    updateAudioPictureInput: UpdateAudioPictureInput,
  ): Promise<UpdateResult> {
    return this.audioPictureService.update(
      updateAudioPictureInput.id,
      updateAudioPictureInput,
    );
  }

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  removeAudioPicture(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return this.audioPictureService.remove(id);
  }
}

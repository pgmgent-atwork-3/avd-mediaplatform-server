import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AudioPictureService } from './audio-picture.service';
import { AudioPicture } from './entities/audio-picture.entity';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => AudioPicture)
export class AudioPictureResolver {
  constructor(private readonly audioPictureService: AudioPictureService) {}

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  createAudioPicture(
    @Args('createAudioPictureInput')
    createAudioPictureInput: CreateAudioPictureInput,
  ) {
    return this.audioPictureService.create(createAudioPictureInput);
  }

  @Query(() => [AudioPicture], { name: 'audioPicture' })
  @UseGuards(RoleGuard(Role.Admin))
  findAll() {
    return this.audioPictureService.findAll();
  }

  @Query(() => AudioPicture, { name: 'audioPicture' })
  @UseGuards(RoleGuard(Role.User))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.audioPictureService.findOne(id);
  }

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  updateAudioPicture(
    @Args('updateAudioPictureInput')
    updateAudioPictureInput: UpdateAudioPictureInput,
  ) {
    return this.audioPictureService.update(
      updateAudioPictureInput.id,
      updateAudioPictureInput,
    );
  }

  @Mutation(() => AudioPicture)
  @UseGuards(RoleGuard(Role.Admin))
  removeAudioPicture(@Args('id', { type: () => Int }) id: number) {
    return this.audioPictureService.remove(id);
  }
}

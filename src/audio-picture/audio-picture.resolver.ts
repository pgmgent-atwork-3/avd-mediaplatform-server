import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AudioPictureService } from './audio-picture.service';
import { AudioPicture } from './entities/audio-picture.entity';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';

@Resolver(() => AudioPicture)
export class AudioPictureResolver {
  constructor(private readonly audioPictureService: AudioPictureService) {}

  @Mutation(() => AudioPicture)
  createAudioPicture(@Args('createAudioPictureInput') createAudioPictureInput: CreateAudioPictureInput) {
    return this.audioPictureService.create(createAudioPictureInput);
  }

  @Query(() => [AudioPicture], { name: 'audioPicture' })
  findAll() {
    return this.audioPictureService.findAll();
  }

  @Query(() => AudioPicture, { name: 'audioPicture' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.audioPictureService.findOne(id);
  }

  @Mutation(() => AudioPicture)
  updateAudioPicture(@Args('updateAudioPictureInput') updateAudioPictureInput: UpdateAudioPictureInput) {
    return this.audioPictureService.update(updateAudioPictureInput.id, updateAudioPictureInput);
  }

  @Mutation(() => AudioPicture)
  removeAudioPicture(@Args('id', { type: () => Int }) id: number) {
    return this.audioPictureService.remove(id);
  }
}

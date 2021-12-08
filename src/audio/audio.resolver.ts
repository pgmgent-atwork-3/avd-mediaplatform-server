import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AudioService } from './audio.service';
import { Audio } from './entities/audio.entity';
import { CreateAudioInput } from './dto/create-audio.input';
import { UpdateAudioInput } from './dto/update-audio.input';

@Resolver(() => Audio)
export class AudioResolver {
  constructor(private readonly audioService: AudioService) {}

  @Mutation(() => Audio)
  createAudio(@Args('createAudioInput') createAudioInput: CreateAudioInput) {
    return this.audioService.create(createAudioInput);
  }

  @Query(() => [Audio], { name: 'audio' })
  findAll() {
    return this.audioService.findAll();
  }

  @Query(() => Audio, { name: 'audio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.audioService.findOne(id);
  }

  @Mutation(() => Audio)
  updateAudio(@Args('updateAudioInput') updateAudioInput: UpdateAudioInput) {
    return this.audioService.update(updateAudioInput.id, updateAudioInput);
  }

  @Mutation(() => Audio)
  removeAudio(@Args('id', { type: () => Int }) id: number) {
    return this.audioService.remove(id);
  }
}

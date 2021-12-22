import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { query } from 'express';
import { Tag } from 'src/tag/entities/tag.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => Video)
  createVideo(@Args('createVideoInput') createVideoInput: CreateVideoInput) {
    return this.videoService.create(createVideoInput);
  }

  @Query(() => [Video], { name: 'videos' })
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.videoService.findAll();
  }

  @Query(() => Video, { name: 'video' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.videoService.findOne(id);
  }

  @Mutation(() => Video)
  updateVideo(@Args('updateVideoInput') updateVideoInput: UpdateVideoInput) {
    return this.videoService.update(updateVideoInput.id, updateVideoInput);
  }

  @Mutation(() => Video)
  removeVideo(@Args('id', { type: () => Int }) id: number) {
    return this.videoService.remove(id);
  }
}

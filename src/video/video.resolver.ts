import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { UseGuards } from '@nestjs/common';
import RoleGuard from 'src/auth/role.guard';
import Role from 'src/user/enums/role.enum';

@Resolver(() => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  createVideo(@Args('createVideoInput') createVideoInput: CreateVideoInput) {
    return this.videoService.create(createVideoInput);
  }

  @Query(() => [Video], { name: 'videos' })
  findAll() {
    return this.videoService.findAll();
  }

  @Query(() => Video, { name: 'video' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.videoService.findOne(id);
  }

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  updateVideo(@Args('updateVideoInput') updateVideoInput: UpdateVideoInput) {
    return this.videoService.update(updateVideoInput.id, updateVideoInput);
  }

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  removeVideo(@Args('id', { type: () => Int }) id: number) {
    return this.videoService.remove(id);
  }
}

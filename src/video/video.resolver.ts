import { PaginatedVideoResponse } from './dto/paginated-video.response';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import RoleGuard from 'src/auth/role.guard';
import Role from 'src/user/enums/role.enum';
import { PaginateVideoInput } from './dto/paginate-video.input';
import { PageInfo } from 'src/common/dto/page-info.response';
import { User } from 'src/user/entities/user.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Resolver(() => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  createVideo(
    @Args('createVideoInput') createVideoInput: CreateVideoInput,
  ): Promise<Video> {
    return this.videoService.create(createVideoInput);
  }

  @Query(() => PaginatedVideoResponse, { name: 'paginatedVideos' })
  async findAll(
    @Args() options: PaginateVideoInput,
  ): Promise<PaginatedVideoResponse> {
    // links does not get used for the URLs, but rather to determine if there is a next page
    const { items, links, meta } = await this.videoService.paginate({
      limit: options.limit,
      page: options.page,
      route: '/',
    });

    return new PaginatedVideoResponse(
      meta.currentPage,
      meta.totalItems,
      meta.totalPages,
      new PageInfo(links.next, links.previous),
      items,
    );
  }

  @Query(() => [Video], { name: 'videos' })
  findAllVideos(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  @Query(() => Video, { name: 'video' })
  findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Video> {
    return this.videoService.findOne(id);
  }

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  updateVideo(
    @Args('updateVideoInput') updateVideoInput: UpdateVideoInput,
  ): Promise<Video> {
    return this.videoService.update(updateVideoInput.id, updateVideoInput);
  }

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  removeVideo(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Video> {
    return this.videoService.remove(id);
  }

  // @Mutation(() => Video)
  // @UseGuards(RoleGuard(Role.Admin))
  // addUserToVideo(
  //   @Args('videoId', { type: () => Int }, ParseIntPipe) videoId: number,
  //   @Args('userId', { type: () => Int }, ParseIntPipe) userId: number,
  // ): Promise<Video> {
  //   return this.videoService.addUserToVideo(videoId, userId);
  // }
}

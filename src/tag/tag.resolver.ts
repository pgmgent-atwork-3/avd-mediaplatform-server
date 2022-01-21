import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import RoleGuard from 'src/auth/role.guard';
import Role from 'src/user/enums/role.enum';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Video } from 'src/video/entities/video.entity';
import { Live } from 'src/live/entities/live.entity';
import { query } from 'express';
import { PaginatedTagResponse } from './dto/paginated-tag.response';
import { PaginateTagInput } from './dto/paginate-tag.input';
import { PageInfo } from 'src/common/dto/page-info.response';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Tag)
  @UseGuards(RoleGuard(Role.Admin))
  createTag(
    @Args('createTagInput') createTagInput: CreateTagInput,
  ): Promise<Tag> {
    return this.tagService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  @UseGuards(RoleGuard(Role.Admin))
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Query(() => PaginatedTagResponse, { name: 'paginatedTags' })
  async findPaginatedTags(
    @Args() options: PaginateTagInput,
  ): Promise<PaginatedTagResponse> {
    // links does not get used for the URLs, but rather to determine if there is a next page
    const { items, links, meta } = await this.tagService.paginate({
      limit: options.limit,
      page: options.page,
      route: '/',
    });

    return new PaginatedTagResponse(
      meta.currentPage,
      meta.totalItems,
      meta.totalPages,
      new PageInfo(links.next, links.previous),
      items,
    );
  }

  @Query(() => Tag, { name: 'tag' })
  @UseGuards(RoleGuard(Role.Admin))
  findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  @UseGuards(RoleGuard(Role.Admin))
  updateTag(
    @Args('updateTagInput') updateTagInput: UpdateTagInput,
  ): Promise<Tag> {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  @UseGuards(RoleGuard(Role.Admin))
  removeTag(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Tag> {
    return this.tagService.remove(id);
  }

  @Mutation(() => Tag, { name: 'addTagToVideo' })
  @UseGuards(RoleGuard(Role.Admin))
  addTagToVideo(
    @Args('videoId', { type: () => Int }, ParseIntPipe) videoId: number,
    @Args('tagId', { type: () => Int }, ParseIntPipe) tagId: number,
  ): Promise<Video> {
    return this.tagService.addTagToVideo(videoId, tagId);
  }

  @Mutation(() => Tag, { name: 'addTagToLive' })
  @UseGuards(RoleGuard(Role.Admin))
  addTagToLive(
    @Args('liveId', { type: () => Int }, ParseIntPipe) liveId: number,
    @Args('tagId', { type: () => Int }, ParseIntPipe) tagId: number,
  ): Promise<Live> {
    return this.tagService.addTagToLive(liveId, tagId);
  }
}

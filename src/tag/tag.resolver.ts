import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Tag)
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tag' })
  findAll() {
    return this.tagService.findAll();
  }

  @Query(() => Tag, { name: 'tag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.remove(id);
  }

  @Mutation(() => Tag, { name: 'addTagToVideo' })
  addTagToVideo(
    @Args('videoId', { type: () => Int }) videoId: number,
    @Args('tagId', { type: () => Int }) tagId: number,
  ) {
    return this.tagService.addTagToVideo(videoId, tagId);
  }

  @Mutation(() => Tag, { name: 'addTagToLive' })
  addTagToLive(
    @Args('liveId', { type: () => Int }) liveId: number,
    @Args('tagId', { type: () => Int }) tagId: number,
  ) {
    return this.tagService.addTagToLive(liveId, tagId);
  }
}

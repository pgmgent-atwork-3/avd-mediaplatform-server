import { Field, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/common/dto/page-info.response';
import { Video } from '../entities/video.entity';

@ObjectType()
export class PaginatedVideoResponse {
  constructor(
    currentPage: Number,
    totalCount: Number,
    totalPages: Number,
    pageInfo: PageInfo,
    items?: Video[],
  ) {
    this.totalCount = totalCount;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.pageInfo = pageInfo;
    this.items = items;
  }

  @Field(() => Number)
  currentPage: Number;

  @Field(() => Number)
  totalCount: Number;

  @Field(() => Number)
  totalPages: Number;

  @Field(() => PageInfo)
  pageInfo: PageInfo;

  @Field(() => [Video], { nullable: true })
  items: Video[];
}

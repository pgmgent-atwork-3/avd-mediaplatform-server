import { Field, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/common/dto/page-info.response';
import { Tag } from '../entities/tag.entity';

@ObjectType()
export class PaginatedTagResponse {
  constructor(
    currentPage: Number,
    totalCount: Number,
    totalPages: Number,
    pageInfo: PageInfo,
    items?: Tag[],
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

  @Field(() => [Tag], { nullable: true })
  items: Tag[];
}

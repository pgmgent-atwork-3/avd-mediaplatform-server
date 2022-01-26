import { Field, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/common/dto/page-info.response';
import { User } from '../entities/user.entity';

@ObjectType()
export class PaginatedUserResponse {
  constructor(
    currentPage: Number,
    totalCount: Number,
    totalPages: Number,
    pageInfo: PageInfo,
    items?: User[],
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

  @Field(() => [User], { nullable: true })
  items: User[];
}

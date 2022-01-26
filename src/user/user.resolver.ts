import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import RoleGuard from 'src/auth/role.guard';
import Role from './enums/role.enum';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { PaginatedUserResponse } from './dto/paginate-user.response';
import { PaginateUserInput } from './dto/paginate-user.input';
import { PageInfo } from 'src/common/dto/page-info.response';
import { Video } from 'src/video/entities/video.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(RoleGuard(Role.Admin))
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => PaginatedUserResponse, { name: 'paginatedUsers' })
  async findPaginatedUsers(
    @Args() options: PaginateUserInput,
  ): Promise<PaginatedUserResponse> {
    // links does not get used for the URLs, but rather to determine if there is a next page
    const { items, links, meta } = await this.userService.paginate({
      limit: options.limit,
      page: options.page,
      route: '/',
    });

    return new PaginatedUserResponse(
      meta.currentPage,
      meta.totalItems,
      meta.totalPages,
      new PageInfo(links.next, links.previous),
      items,
    );
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(RoleGuard(Role.Admin))
  findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Query(() => User)
  @UseGuards(RoleGuard(Role.All))
  getUser(@Context() context): Promise<User> {
    return this.userService.findOne(context.req.user.userId);
  }

  @Mutation(() => User)
  @UseGuards(RoleGuard(Role.Admin))
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  @UseGuards(RoleGuard(Role.Admin))
  removeUser(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<User> {
    return this.userService.remove(id);
  }

  // @Mutation(() => User)
  // @UseGuards(RoleGuard(Role.Admin))
  // async addVideoToUser(
  //   @Args('userId', { type: () => Int }, ParseIntPipe) userId: number,
  //   @Args('videoId', { type: () => Int }, ParseIntPipe) videoId: number,
  // ): Promise<User> {
  //   return this.userService.addVideoToUser(userId, videoId);
  // }

  @Mutation(() => Video)
  @UseGuards(RoleGuard(Role.Admin))
  async addUserToVideo(
    @Args('userId', { type: () => Int }, ParseIntPipe) userId: number,
    @Args('videoId', { type: () => Int }, ParseIntPipe) videoId: number,
  ): Promise<Video> {
    return await this.userService.addUserToVideo(videoId, userId);
  }
}

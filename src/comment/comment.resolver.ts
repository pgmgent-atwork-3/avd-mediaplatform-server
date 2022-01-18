import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  @UseGuards(RoleGuard(Role.User))
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ): Promise<Comment> {
    return this.commentService.create(createCommentInput);
  }

  @Query(() => [Comment], { name: 'comments' })
  @UseGuards(RoleGuard(Role.User))
  findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  @UseGuards(RoleGuard(Role.User))
  findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  @UseGuards(RoleGuard(Role.User))
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ): Promise<Comment> {
    return this.commentService.update(
      updateCommentInput.id,
      updateCommentInput,
    );
  }

  @Mutation(() => Comment)
  @UseGuards(RoleGuard(Role.User))
  removeComment(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Comment> {
    return this.commentService.remove(id);
  }
}

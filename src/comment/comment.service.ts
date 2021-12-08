import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentInput: CreateCommentInput) {
    const comment = this.commentRepository.create(createCommentInput);
    await this.commentRepository.save(comment);
    return comment;
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne(id);
  }

  async update(id: number, updateCommentInput: UpdateCommentInput) {
    const comment = await this.commentRepository.findOne(id);
    await this.commentRepository.update(id, updateCommentInput);
    return comment;
  }

  async remove(id: number) {
    const comment = await this.commentRepository.findOne(id);
    await this.commentRepository.remove(comment);
    return comment;
  }
}

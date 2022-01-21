import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tag/entities/tag.entity';
import { Like, Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Video } from './entities/video.entity';
import {
  paginate,
  IPaginationOptions,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  create(createVideoInput: CreateVideoInput): Promise<Video> {
    const newVideo = this.videoRepository.create(createVideoInput);
    return this.videoRepository.save(newVideo);
  }

  async findAll(): Promise<Video[]> {
    return await this.videoRepository.find({
      relations: ['tags', 'comments', 'user'],
    });
  }

  async findOne(id: number): Promise<Video> {
    return await this.videoRepository.findOne(id, {
      relations: ['tags', 'comments', 'user'],
    });
  }

  async update(id: number, updateVideoInput: UpdateVideoInput): Promise<Video> {
    await this.videoRepository.update(id, updateVideoInput);
    return await this.videoRepository.findOne(id);
  }

  async remove(id: number): Promise<Video> {
    const video = await this.videoRepository.findOne(id);
    return await this.videoRepository.remove(video);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Video>> {
    return await paginate<Video>(this.videoRepository, options, {
      relations: ['tags', 'comments', 'user'],
    });
  }
}

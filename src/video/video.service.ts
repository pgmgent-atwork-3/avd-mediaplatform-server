import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tag/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Video } from './entities/video.entity';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  create(createVideoInput: CreateVideoInput) {
    const newVideo = this.videoRepository.create(createVideoInput);
    return this.videoRepository.save(newVideo);
  }

  async findAll() {
    return await this.videoRepository.find({
      relations: ['tags', 'comments', 'user'],
    });
  }

  async findOne(id: number) {
    return await this.videoRepository.findOne(id, {
      relations: ['tags', 'comments', 'user'],
    });
  }

  async update(id: number, updateVideoInput: UpdateVideoInput) {
    return await this.videoRepository.update(id, updateVideoInput);
  }

  async remove(id: number): Promise<Video> {
    const video = await this.videoRepository.findOne(id);
    return await this.videoRepository.remove(video);
  }
}

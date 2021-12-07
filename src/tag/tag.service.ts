import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/video/entities/video.entity';
import { Repository } from 'typeorm';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  create(createTagInput: CreateTagInput) {
    const newTag = this.tagRepository.create(createTagInput);
    return this.tagRepository.save(newTag);
  }

  findAll() {
    return `This action returns all tag`;
  }

  async findOne(id: number) {
    return await this.tagRepository.findOne(id);
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }

  async addTagToVideo(videoId: number, tagId: number) {
    let foundVideo = await this.videoRepository.findOne(
      { id: videoId },
      { relations: ['tags'] },
    );
    let foundTag = await this.tagRepository.findOne({ id: tagId });

    if (foundVideo && foundTag) {
      foundVideo.tags = foundVideo.tags
        ? [...foundVideo.tags, foundTag]
        : [foundTag];

      return await this.videoRepository.save(foundVideo);
    } else {
      throw new Error('Video or tag not found');
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Live } from 'src/live/entities/live.entity';
import { Video } from 'src/video/entities/video.entity';
import { Repository } from 'typeorm';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
    @InjectRepository(Live) private liveRepository: Repository<Live>,
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  create(createTagInput: CreateTagInput): Promise<Tag> {
    const newTag = this.tagRepository.create(createTagInput);
    return this.tagRepository.save(newTag);
  }

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return await this.tagRepository.findOne(id);
  }

  async update(id: number, updateTagInput: UpdateTagInput): Promise<Tag> {
    await this.tagRepository.update(id, updateTagInput);
    return await this.tagRepository.findOne(id);
  }

  async remove(id: number): Promise<Tag> {
    const tag = await this.findOne(id);
    return this.tagRepository.remove(tag);
  }

  async addTagToVideo(videoId: number, tagId: number): Promise<Video> {
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

  async addTagToLive(liveId: number, tagId: number): Promise<Live> {
    let foundLive = await this.liveRepository.findOne(
      { id: liveId },
      { relations: ['tags'] },
    );
    let foundTag = await this.tagRepository.findOne({ id: tagId });

    if (foundLive && foundTag) {
      foundLive.tags = foundLive.tags
        ? [...foundLive.tags, foundTag]
        : [foundTag];

      return await this.liveRepository.save(foundLive);
    } else {
      throw new Error('Livestream or tag not found');
    }
  }
}

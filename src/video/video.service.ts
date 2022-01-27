import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Video } from './entities/video.entity';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createVideoInput: CreateVideoInput): Promise<Video> {
    const newVideo = this.videoRepository.create(createVideoInput);
    return this.videoRepository.save(newVideo);
  }

  async findAll(): Promise<Video[]> {
    return await this.videoRepository.find({
      relations: ['tags', 'comments', 'users'],
    });
  }

  async findOne(id: number): Promise<Video> {
    return await this.videoRepository.findOne(id, {
      relations: ['tags', 'comments', 'users'],
    });
  }

  async update(id: number, updateVideoInput: UpdateVideoInput): Promise<Video> {
    await this.videoRepository.update(id, updateVideoInput);
    return await this.videoRepository.findOne(id, {
      relations: ['tags', 'comments', 'users'],
    });
  }

  async remove(id: number): Promise<Video> {
    const video = await this.videoRepository.findOne(id);
    return await this.videoRepository.remove(video);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Video>> {
    return await paginate<Video>(this.videoRepository, options, {
      relations: ['tags', 'comments', 'users'],
    });
  }

  // async addUsersToVideo(videoId: number, userId: number): Promise<Video> {
  //   let foundVideo = await this.videoRepository.findOne(
  //     { id: videoId },
  //     { relations: ['user'] },
  //   );
  //   let foundUser = await this.userRepository.findOne(
  //     { id: userId },
  //     { relations: ['videos'] },
  //   );
  //   foundVideo.user.push(foundUser);
  //   return await this.videoRepository.save(foundVideo);
  // }
}

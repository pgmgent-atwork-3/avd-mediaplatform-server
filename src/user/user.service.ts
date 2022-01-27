import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Video } from 'src/video/entities/video.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) readonly userRepository: Repository<User>,
    @InjectRepository(Video) readonly videoRepository: Repository<Video>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<User>> {
    return await paginate<User>(this.userRepository, options, {
      order: { id: 'ASC' },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['videos'],
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id, {
      relations: ['videos'],
    });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne(
      { username },
      {
        relations: ['videos'],
      },
    );
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, updateUserInput);
    return await this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
    return user;
  }

  // async addVideoToUser(userId: number, videoId: number): Promise<User> {
  //   let foundUser = await this.userRepository.findOne(
  //     { id: userId },
  //     { relations: ['videos'] },
  //   );

  //   let foundVideo = await this.videoRepository.findOne({ id: videoId });
  //   foundUser.videos.push(foundVideo);
  //   return await this.userRepository.save(foundUser);
  // }

  async addUserToVideo(videoId: number, userId: number): Promise<Video> {
    let foundVideo = await this.videoRepository.findOne(
      { id: videoId },
      { relations: ['users'] },
    );

    let foundUser = await this.userRepository.findOne({ id: userId });
    foundVideo.users.push(foundUser);
    return await this.videoRepository.save(foundVideo);
  }
}

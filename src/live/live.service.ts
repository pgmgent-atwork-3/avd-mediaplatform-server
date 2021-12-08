import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLiveInput } from './dto/create-live.input';
import { UpdateLiveInput } from './dto/update-live.input';
import { Live } from './entities/live.entity';

@Injectable()
export class LiveService {
  constructor(
    @InjectRepository(Live)
    private readonly liveRepository: Repository<Live>,
  ) {}

  async create(createLiveInput: CreateLiveInput) {
    const newLive = this.liveRepository.create(createLiveInput);
    return this.liveRepository.save(newLive);
  }

  async findAll() {
    return await this.liveRepository.find({ relations: ['tags'] });
  }

  async findOne(id: number) {
    return await this.liveRepository.findOne(id);
  }

  async update(id: number, updateLiveInput: UpdateLiveInput) {
    await this.liveRepository.update(id, updateLiveInput);
    return await this.liveRepository.findOne(id);
  }

  async remove(id: number) {
    const live = await this.liveRepository.findOne(id);
    await this.liveRepository.remove(live);
    return live;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLiveHistoryInput } from './dto/create-live-history.input';
import { UpdateLiveHistoryInput } from './dto/update-live-history.input';
import { LiveHistory } from './entities/live-history.entity';

@Injectable()
export class LiveHistoryService {
  constructor(
    @InjectRepository(LiveHistory)
    private readonly liveHistoryRepository: Repository<LiveHistory>,
  ) {}

  async create(createLiveHistoryInput: CreateLiveHistoryInput) {
    return await this.liveHistoryRepository.save(createLiveHistoryInput);
  }

  async findAll() {
    return await this.liveHistoryRepository.find();
  }

  async findOne(id: number) {
    return await this.liveHistoryRepository.findOne(id);
  }

  async update(id: number, updateLiveHistoryInput: UpdateLiveHistoryInput) {
    const liveHistory = await this.liveHistoryRepository.findOne(id);
    await this.liveHistoryRepository.update(id, updateLiveHistoryInput);
    return await this.liveHistoryRepository.findOne(id);
  }

  async remove(id: number) {
    const liveHistory = await this.liveHistoryRepository.findOne(id);
    await this.liveHistoryRepository.remove(liveHistory);
    return await this.liveHistoryRepository.find();
  }
}

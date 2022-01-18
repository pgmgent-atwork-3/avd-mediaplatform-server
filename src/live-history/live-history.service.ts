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

  async create(
    createLiveHistoryInput: CreateLiveHistoryInput,
  ): Promise<LiveHistory> {
    return await this.liveHistoryRepository.save(createLiveHistoryInput);
  }

  async findAll(): Promise<LiveHistory[]> {
    return await this.liveHistoryRepository.find();
  }

  async findOne(id: number): Promise<LiveHistory> {
    return await this.liveHistoryRepository.findOne(id);
  }

  async update(
    id: number,
    updateLiveHistoryInput: UpdateLiveHistoryInput,
  ): Promise<LiveHistory> {
    await this.liveHistoryRepository.update(id, updateLiveHistoryInput);
    return await this.liveHistoryRepository.findOne(id);
  }

  async remove(id: number): Promise<LiveHistory> {
    const liveHistory = await this.liveHistoryRepository.findOne(id);
    return await this.liveHistoryRepository.remove(liveHistory);
  }
}

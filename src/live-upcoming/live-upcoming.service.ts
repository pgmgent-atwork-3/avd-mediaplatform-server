import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLiveUpcomingInput } from './dto/create-live-upcoming.input';
import { UpdateLiveUpcomingInput } from './dto/update-live-upcoming.input';
import { LiveUpcoming } from './entities/live-upcoming.entity';

@Injectable()
export class LiveUpcomingService {
  constructor(
    @InjectRepository(LiveUpcoming)
    private readonly liveUpcomingRepository: Repository<LiveUpcoming>,
  ) {}

  async create(createLiveUpcomingInput: CreateLiveUpcomingInput) {
    return await this.liveUpcomingRepository.save(createLiveUpcomingInput);
  }

  async findAll() {
    return await this.liveUpcomingRepository.find();
  }

  async findOne(id: number) {
    return await this.liveUpcomingRepository.findOne(id);
  }

  async update(id: number, updateLiveUpcomingInput: UpdateLiveUpcomingInput) {
    const liveUpcoming = await this.liveUpcomingRepository.findOne(id);
    return await this.liveUpcomingRepository.save(liveUpcoming);
  }

  async remove(id: number) {
    const liveUpcoming = await this.liveUpcomingRepository.findOne(id);
    return await this.liveUpcomingRepository.remove(liveUpcoming);
  }
}

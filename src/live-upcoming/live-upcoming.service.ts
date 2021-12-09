import { Injectable } from '@nestjs/common';
import { CreateLiveUpcomingInput } from './dto/create-live-upcoming.input';
import { UpdateLiveUpcomingInput } from './dto/update-live-upcoming.input';

@Injectable()
export class LiveUpcomingService {
  create(createLiveUpcomingInput: CreateLiveUpcomingInput) {
    return 'This action adds a new liveUpcoming';
  }

  findAll() {
    return `This action returns all liveUpcoming`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liveUpcoming`;
  }

  update(id: number, updateLiveUpcomingInput: UpdateLiveUpcomingInput) {
    return `This action updates a #${id} liveUpcoming`;
  }

  remove(id: number) {
    return `This action removes a #${id} liveUpcoming`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateLiveHistoryInput } from './dto/create-live-history.input';
import { UpdateLiveHistoryInput } from './dto/update-live-history.input';

@Injectable()
export class LiveHistoryService {
  create(createLiveHistoryInput: CreateLiveHistoryInput) {
    return 'This action adds a new liveHistory';
  }

  findAll() {
    return `This action returns all liveHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liveHistory`;
  }

  update(id: number, updateLiveHistoryInput: UpdateLiveHistoryInput) {
    return `This action updates a #${id} liveHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} liveHistory`;
  }
}

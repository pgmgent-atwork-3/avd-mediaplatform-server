import { Injectable } from '@nestjs/common';
import { CreateLiveInput } from './dto/create-live.input';
import { UpdateLiveInput } from './dto/update-live.input';

@Injectable()
export class LiveService {
  create(createLiveInput: CreateLiveInput) {
    return 'This action adds a new live';
  }

  findAll() {
    return `This action returns all live`;
  }

  findOne(id: number) {
    return `This action returns a #${id} live`;
  }

  update(id: number, updateLiveInput: UpdateLiveInput) {
    return `This action updates a #${id} live`;
  }

  remove(id: number) {
    return `This action removes a #${id} live`;
  }
}

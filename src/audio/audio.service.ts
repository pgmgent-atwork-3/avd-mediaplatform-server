import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAudioInput } from './dto/create-audio.input';
import { UpdateAudioInput } from './dto/update-audio.input';
import { Audio } from './entities/audio.entity';

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(Audio)
    private readonly audioRepository: Repository<Audio>,
  ) {}

  async create(createAudioInput: CreateAudioInput) {
    return await this.audioRepository.save(createAudioInput);
  }

  async findAll() {
    return await this.audioRepository.find({ relations: ['audio_picture'] });
  }

  async findOne(id: number) {
    return await this.audioRepository.findOne(id);
  }

  async update(id: number, updateAudioInput: UpdateAudioInput) {
    return await this.audioRepository.update(id, updateAudioInput);
  }

  async remove(id: number) {
    return await this.audioRepository.delete(id);
  }
}

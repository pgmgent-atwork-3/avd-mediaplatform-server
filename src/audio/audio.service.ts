import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAudioInput } from './dto/create-audio.input';
import { UpdateAudioInput } from './dto/update-audio.input';
import { Audio } from './entities/audio.entity';

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(Audio)
    private readonly audioRepository: Repository<Audio>,
  ) {}

  async create(createAudioInput: CreateAudioInput): Promise<Audio> {
    return await this.audioRepository.save(createAudioInput);
  }

  async findAll(): Promise<Audio[]> {
    return await this.audioRepository.find({ relations: ['audio_picture'] });
  }

  async findOne(id: number): Promise<Audio> {
    return await this.audioRepository.findOne(id, {
      relations: ['audio_picture'],
    });
  }

  async update(id: number, updateAudioInput: UpdateAudioInput): Promise<Audio> {
    const audio = await this.audioRepository.findOne(id);
    return await this.audioRepository.save({ ...audio, ...updateAudioInput });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.audioRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';
import { AudioPicture } from './entities/audio-picture.entity';

@Injectable()
export class AudioPictureService {
  constructor(
    @InjectRepository(AudioPicture)
    private audioPictureRepository: Repository<AudioPicture>,
  ) {}

  async create(createAudioPictureInput: CreateAudioPictureInput) {
    return await this.audioPictureRepository.save(createAudioPictureInput);
  }

  async findAll() {
    return await this.audioPictureRepository.find();
  }

  async findOne(id: number) {
    return await this.audioPictureRepository.findOne(id);
  }

  async update(id: number, updateAudioPictureInput: UpdateAudioPictureInput) {
    return await this.audioPictureRepository.update(
      id,
      updateAudioPictureInput,
    );
  }

  async remove(id: number) {
    return await this.audioPictureRepository.delete(id);
  }
}

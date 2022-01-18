import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';
import { AudioPicture } from './entities/audio-picture.entity';

@Injectable()
export class AudioPictureService {
  constructor(
    @InjectRepository(AudioPicture)
    private audioPictureRepository: Repository<AudioPicture>,
  ) {}

  async create(
    createAudioPictureInput: CreateAudioPictureInput,
  ): Promise<AudioPicture> {
    return await this.audioPictureRepository.save(createAudioPictureInput);
  }

  async findAll(): Promise<AudioPicture[]> {
    return await this.audioPictureRepository.find();
  }

  async findOne(id: number): Promise<AudioPicture> {
    return await this.audioPictureRepository.findOne(id);
  }

  async update(
    id: number,
    updateAudioPictureInput: UpdateAudioPictureInput,
  ): Promise<UpdateResult> {
    return await this.audioPictureRepository.update(
      id,
      updateAudioPictureInput,
    );
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.audioPictureRepository.delete(id);
  }
}

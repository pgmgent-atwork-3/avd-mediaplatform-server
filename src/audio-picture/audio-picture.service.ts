import { Injectable } from '@nestjs/common';
import { CreateAudioPictureInput } from './dto/create-audio-picture.input';
import { UpdateAudioPictureInput } from './dto/update-audio-picture.input';

@Injectable()
export class AudioPictureService {
  create(createAudioPictureInput: CreateAudioPictureInput) {
    return 'This action adds a new audioPicture';
  }

  findAll() {
    return `This action returns all audioPicture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audioPicture`;
  }

  update(id: number, updateAudioPictureInput: UpdateAudioPictureInput) {
    return `This action updates a #${id} audioPicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} audioPicture`;
  }
}

import { Module } from '@nestjs/common';
import { AudioPictureService } from './audio-picture.service';
import { AudioPictureResolver } from './audio-picture.resolver';

@Module({
  providers: [AudioPictureResolver, AudioPictureService]
})
export class AudioPictureModule {}

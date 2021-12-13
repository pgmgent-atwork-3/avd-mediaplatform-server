import { Module } from '@nestjs/common';
import { AudioPictureService } from './audio-picture.service';
import { AudioPictureResolver } from './audio-picture.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AudioPicture } from './entities/audio-picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AudioPicture])],
  providers: [AudioPictureResolver, AudioPictureService],
})
export class AudioPictureModule {}

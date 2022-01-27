import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoResolver } from './video.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video, User])],
  providers: [VideoResolver, VideoService],
})
export class VideoModule {}

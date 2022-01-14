import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Video } from 'src/video/entities/video.entity';
import { Live } from 'src/live/entities/live.entity';

@Module({
  providers: [TagResolver, TagService],
  imports: [TypeOrmModule.forFeature([Tag, Live, Video])],
})
export class TagModule {}

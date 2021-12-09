import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioResolver } from './audio.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audio } from './entities/audio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Audio])],
  providers: [AudioResolver, AudioService],
})
export class AudioModule {}

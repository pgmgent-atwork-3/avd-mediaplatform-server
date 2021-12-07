import { Module } from '@nestjs/common';
import { LiveService } from './live.service';
import { LiveResolver } from './live.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './entities/live.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  providers: [LiveResolver, LiveService],
})
export class LiveModule {}

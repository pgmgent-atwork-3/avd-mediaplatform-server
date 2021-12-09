import { Module } from '@nestjs/common';
import { LiveHistoryService } from './live-history.service';
import { LiveHistoryResolver } from './live-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveHistory } from './entities/live-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LiveHistory])],
  providers: [LiveHistoryResolver, LiveHistoryService],
})
export class LiveHistoryModule {}

import { Module } from '@nestjs/common';
import { LiveHistoryService } from './live-history.service';
import { LiveHistoryResolver } from './live-history.resolver';

@Module({
  providers: [LiveHistoryResolver, LiveHistoryService]
})
export class LiveHistoryModule {}

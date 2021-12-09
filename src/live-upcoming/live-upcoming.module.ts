import { Module } from '@nestjs/common';
import { LiveUpcomingService } from './live-upcoming.service';
import { LiveUpcomingResolver } from './live-upcoming.resolver';

@Module({
  providers: [LiveUpcomingResolver, LiveUpcomingService]
})
export class LiveUpcomingModule {}

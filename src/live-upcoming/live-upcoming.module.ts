import { Module } from '@nestjs/common';
import { LiveUpcomingService } from './live-upcoming.service';
import { LiveUpcomingResolver } from './live-upcoming.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveUpcoming } from './entities/live-upcoming.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LiveUpcoming])],
  providers: [LiveUpcomingResolver, LiveUpcomingService],
})
export class LiveUpcomingModule {}

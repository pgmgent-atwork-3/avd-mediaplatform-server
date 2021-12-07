import { Module } from '@nestjs/common';
import { LiveService } from './live.service';
import { LiveResolver } from './live.resolver';

@Module({
  providers: [LiveResolver, LiveService]
})
export class LiveModule {}

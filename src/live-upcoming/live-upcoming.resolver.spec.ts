import { Test, TestingModule } from '@nestjs/testing';
import { LiveUpcomingResolver } from './live-upcoming.resolver';
import { LiveUpcomingService } from './live-upcoming.service';

describe('LiveUpcomingResolver', () => {
  let resolver: LiveUpcomingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveUpcomingResolver, LiveUpcomingService],
    }).compile();

    resolver = module.get<LiveUpcomingResolver>(LiveUpcomingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

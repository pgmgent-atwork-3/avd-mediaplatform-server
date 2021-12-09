import { Test, TestingModule } from '@nestjs/testing';
import { LiveUpcomingService } from './live-upcoming.service';

describe('LiveUpcomingService', () => {
  let service: LiveUpcomingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveUpcomingService],
    }).compile();

    service = module.get<LiveUpcomingService>(LiveUpcomingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

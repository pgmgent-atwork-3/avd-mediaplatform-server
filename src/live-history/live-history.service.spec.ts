import { Test, TestingModule } from '@nestjs/testing';
import { LiveHistoryService } from './live-history.service';

describe('LiveHistoryService', () => {
  let service: LiveHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveHistoryService],
    }).compile();

    service = module.get<LiveHistoryService>(LiveHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

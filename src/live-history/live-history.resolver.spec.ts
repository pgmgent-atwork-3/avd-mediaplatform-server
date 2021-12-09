import { Test, TestingModule } from '@nestjs/testing';
import { LiveHistoryResolver } from './live-history.resolver';
import { LiveHistoryService } from './live-history.service';

describe('LiveHistoryResolver', () => {
  let resolver: LiveHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveHistoryResolver, LiveHistoryService],
    }).compile();

    resolver = module.get<LiveHistoryResolver>(LiveHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

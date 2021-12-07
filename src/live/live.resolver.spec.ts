import { Test, TestingModule } from '@nestjs/testing';
import { LiveResolver } from './live.resolver';
import { LiveService } from './live.service';

describe('LiveResolver', () => {
  let resolver: LiveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveResolver, LiveService],
    }).compile();

    resolver = module.get<LiveResolver>(LiveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

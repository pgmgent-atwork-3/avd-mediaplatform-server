import { Test, TestingModule } from '@nestjs/testing';
import { AudioPictureResolver } from './audio-picture.resolver';
import { AudioPictureService } from './audio-picture.service';

describe('AudioPictureResolver', () => {
  let resolver: AudioPictureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudioPictureResolver, AudioPictureService],
    }).compile();

    resolver = module.get<AudioPictureResolver>(AudioPictureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

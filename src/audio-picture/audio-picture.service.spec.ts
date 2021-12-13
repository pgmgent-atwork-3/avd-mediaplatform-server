import { Test, TestingModule } from '@nestjs/testing';
import { AudioPictureService } from './audio-picture.service';

describe('AudioPictureService', () => {
  let service: AudioPictureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudioPictureService],
    }).compile();

    service = module.get<AudioPictureService>(AudioPictureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { AudioPicture } from 'src/audio-picture/entities/audio-picture.entity';
import { define } from 'typeorm-seeding';

define(AudioPicture, (faker: any) => {
  const audioPicture = new AudioPicture();

  audioPicture.url = faker.lorem.sentence();

  return audioPicture;
});

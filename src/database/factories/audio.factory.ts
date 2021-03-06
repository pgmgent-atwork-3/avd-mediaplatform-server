import { AudioPicture } from 'src/audio-picture/entities/audio-picture.entity';
import { Audio } from 'src/audio/entities/audio.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { define, factory } from 'typeorm-seeding';

const makeid = (length) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createAudioTags = () => {
  const tags = [];
  for (let i = 0; i < 10; i++) {
    factory(Tag)() as any;
  }
  return tags;
};

define(Audio, (faker: any) => {
  const audio = new Audio();

  audio.title = faker.lorem.sentence();
  audio.description = faker.lorem.sentence();
  audio.soundcloud_url = `https://soundcloud.com/${makeid(15)}`;
  audio.tags = createAudioTags();
  audio.audio_picture = factory(AudioPicture)() as any;

  return audio;
});

import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import { Video } from 'src/video/entities/video.entity';
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

define(Video, (faker: any) => {
  const video = new Video();

  video.title = faker.lorem.sentence();
  video.description = faker.lorem.sentence();
  video.url = `https://youtube.com/${makeid(15)}`;
  video.user = factory(User)() as any;

  return video;
});
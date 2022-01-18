import { LiveUpcoming } from 'src/live-upcoming/entities/live-upcoming.entity';
import { User } from 'src/user/entities/user.entity';
import { define, factory } from 'typeorm-seeding';
import { makeid } from './video.factory';

define(LiveUpcoming, (faker: any) => {
  const liveUpcoming = new LiveUpcoming();

  liveUpcoming.title = faker.lorem.sentence();
  liveUpcoming.url = `https://youtube.com/${makeid(15)}`;
  liveUpcoming.thumbnail = 'https://lorempicsum.com/futurama/200/200/1';
  liveUpcoming.user = factory(User)() as any;
  liveUpcoming.start_date = new Date();

  return liveUpcoming;
});

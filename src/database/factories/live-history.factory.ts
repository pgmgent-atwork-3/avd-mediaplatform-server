import { LiveHistory } from 'src/live-history/entities/live-history.entity';
import { User } from 'src/user/entities/user.entity';
import { define, factory } from 'typeorm-seeding';
import { makeid } from './video.factory';

define(LiveHistory, (faker: any) => {
  const liveHistory = new LiveHistory();

  liveHistory.title = faker.lorem.sentence();
  liveHistory.url = `https://youtube.com/${makeid(15)}`;
  liveHistory.user = factory(User)() as any;
  liveHistory.thumbnail = 'https://lorempicsum.com/futurama/200/200/1';
  liveHistory.streamed_on = new Date();

  return liveHistory;
});

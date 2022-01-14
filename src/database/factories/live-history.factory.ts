import { LiveHistory } from 'src/live-history/entities/live-history.entity';
import { User } from 'src/user/entities/user.entity';
import { define, factory } from 'typeorm-seeding';

define(LiveHistory, (faker: any) => {
  const liveHistory = new LiveHistory();
  liveHistory.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream nr.{{faker.random.number(55)}} ")

  liveHistory.url = faker.internet.url();;
  liveHistory.thumbnail = faker.image.image();
  liveHistory.user = factory(User)() as any;;
  liveHistory.streamed_on = faker.date.past(); 

  

  return liveHistory;
});

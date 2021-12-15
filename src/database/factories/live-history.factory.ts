import { LiveHistory } from 'src/live-history/entities/live-history.entity';
import { define } from 'typeorm-seeding';

define(LiveHistory, (faker: any) => {
  const liveHistory = new LiveHistory();
  liveHistory.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream nr.{{faker.random.number(55)}} ")

  liveHistory.url = faker.internet.url();;
  liveHistory.thumbnail = faker.image.image();
  liveHistory.creator_name = faker.internet.userName();
  liveHistory.streamed_on = faker.date.past(); 

  

  return liveHistory;
});

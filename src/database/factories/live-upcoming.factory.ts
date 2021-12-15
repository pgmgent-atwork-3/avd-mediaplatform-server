import { LiveUpcoming } from 'src/live-upcoming/entities/live-upcoming.entity';
import { define } from 'typeorm-seeding';

define(LiveUpcoming, (faker: any) => {
  const liveUpcoming = new LiveUpcoming();
  liveUpcoming.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream ")
  liveUpcoming.url = faker.internet.url();
  liveUpcoming.thumbnail = faker.image.image();
  liveUpcoming.creator_name = faker.internet.userName();
  liveUpcoming.start_date = faker.date.soon();

  

  return liveUpcoming;
});

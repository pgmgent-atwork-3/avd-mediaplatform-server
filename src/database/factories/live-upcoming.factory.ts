import { LiveUpcoming } from 'src/live-upcoming/entities/live-upcoming.entity';
import { User } from 'src/user/entities/user.entity';
import { define, factory } from 'typeorm-seeding';

define(LiveUpcoming, (faker: any) => {
  const liveUpcoming = new LiveUpcoming();
  liveUpcoming.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream ")
  liveUpcoming.url = faker.internet.url();
  liveUpcoming.thumbnail = faker.image.image();
  liveUpcoming.user = factory(User)() as any;
  liveUpcoming.start_date = faker.date.soon();

  

  return liveUpcoming;
});

import { Live } from 'src/live/entities/live.entity';
import { define } from 'typeorm-seeding';

define(Live, (faker: any) => {
  const live = new Live();
  live.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream ")
  live.tags = faker.random.words(4);
  live.user = faker.internet.findName();
  

  

  return live;
});

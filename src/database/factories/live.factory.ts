import { Live } from 'src/live/entities/live.entity';
import { User } from 'src/user/entities/user.entity';
import { define, factory } from 'typeorm-seeding';

define(Live, (faker: any) => {
  const live = new Live();
  live.title = faker.fake("{{name.lastName}} {{name.firstName}}'s livestream ")
  live.user = factory(User)() as any;;
  

  

  return live;
});

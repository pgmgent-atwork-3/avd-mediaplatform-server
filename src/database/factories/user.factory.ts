import { User } from 'src/user/entities/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: any) => {
  const user = new User();
  user.username = faker.internet.userName();
  user.firstname = faker.name.firstName();
  user.lastname = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = 'pgm2021';
  user.profile_picture = faker.image.avatar();
  user.account_type = 'user';
  return user;
});

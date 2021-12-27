import { User } from 'src/user/entities/user.entity';
import Role from 'src/user/enums/role.enum';
import { define, factory } from 'typeorm-seeding';

define(User, (faker: any) => {
  const user = new User();
  user.username = faker.internet.userName();
  user.firstname = faker.name.firstName();
  user.lastname = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = 'pgm2021';
  user.profile_picture = faker.image.avatar();
  user.role = Role.User;
  return user;
});

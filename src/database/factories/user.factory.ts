import { User } from 'src/user/entities/user.entity';
import Role from 'src/user/enums/role.enum';
import { Video } from 'src/video/entities/video.entity';
import { define, factory } from 'typeorm-seeding';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

define(User, (faker: any) => {
  const user = new User();
  user.username = faker.internet.userName();
  user.firstname = faker.name.firstName();
  user.lastname = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = 'pgm2021';
  user.profile_picture = `https://i.pravatar.cc/300`;
  user.role = Role.User;
  // user.videos = factory(Video)().makeMany(getRandomInt(1, 4)) as any;
  return user;
});

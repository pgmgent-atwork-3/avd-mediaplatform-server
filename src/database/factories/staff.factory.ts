import { Staff } from 'src/staff/entities/staff.entity';
import { define } from 'typeorm-seeding';

define(Staff, (faker: any) => {
  const staff = new Staff();
  staff.username = faker.internet.userName();
  staff.firstname = faker.name.firstName();
  staff.lastname = faker.name.lastName();
  staff.email = faker.internet.email();
  staff.password = 'pgm2021Staff';
  staff.account_type = 'staff';

  return staff;
});

import { Staff } from 'src/staff/entities/staff.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateStaff implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Staff)().createMany(10);
  }
}

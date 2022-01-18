import { LiveUpcoming } from 'src/live-upcoming/entities/live-upcoming.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateLiveUpcoming implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(LiveUpcoming)().createMany(10);
  }
}

import { LiveHistory } from 'src/live-history/entities/live-history.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateLiveHistory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(LiveHistory)().createMany(10);
  }
}

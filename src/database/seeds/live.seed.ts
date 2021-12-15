import { Live } from 'src/live/entities/live.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateLive implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Live)().createMany(10);
  }
}

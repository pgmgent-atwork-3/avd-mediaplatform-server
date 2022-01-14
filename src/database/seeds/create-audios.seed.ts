import { Audio } from 'src/audio/entities/audio.entity';
import { Connection } from 'typeorm';
import { define, Seeder } from 'typeorm-seeding';

export default class CreateAudios implements Seeder {
  public async run(factory: any, connection: Connection): Promise<any> {
    await factory(Audio)().createMany(10);
  }
}

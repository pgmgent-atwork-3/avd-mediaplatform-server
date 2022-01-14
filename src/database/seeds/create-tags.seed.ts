import { Tag } from 'src/tag/entities/tag.entity';
import { Connection } from 'typeorm';
import { Seeder } from 'typeorm-seeding';

export default class CreateTags implements Seeder {
  public async run(factory: any, connection: Connection): Promise<any> {
    await factory(Tag)().createMany(10);
  }
}

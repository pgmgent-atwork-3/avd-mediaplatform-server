import { Comment } from 'src/comment/entities/comment.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class createComments implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Comment)().createMany(10);
  }
}

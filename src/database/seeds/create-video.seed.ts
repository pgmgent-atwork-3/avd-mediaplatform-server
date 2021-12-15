import { Video } from 'src/video/entities/video.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateVideos implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Video)().createMany(10);
  }
}

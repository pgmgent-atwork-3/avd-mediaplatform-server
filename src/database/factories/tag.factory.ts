import { Tag } from 'src/tag/entities/tag.entity';
import { define } from 'typeorm-seeding';

define(Tag, (faker: any) => {
  const tag = new Tag();
  tag.name = faker.lorem.word();
  return tag;
});

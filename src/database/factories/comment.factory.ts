import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import { Video } from 'src/video/entities/video.entity';
import { define, factory } from 'typeorm-seeding';

define(Comment, (faker: any) => {
  const comment = new Comment();

  comment.content = faker.lorem.sentence();
  comment.user = factory(User)() as any;
  comment.video = factory(Video)() as any;

  return comment;
});

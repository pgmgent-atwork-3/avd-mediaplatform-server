import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Video } from 'src/video/entities/video.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { OneToMany, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  username: string;

  @Column()
  @Field(() => String)
  firstname: string;

  @Column()
  @Field(() => String)
  lastname: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  profile_picture: string;

  @Column()
  @Field(() => String)
  account_type: string;

  @OneToMany(() => Video, (video) => video.user)
  @Field(() => [Video])
  videos: Video[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @Field(() => [Comment])
  comments: Comment[];
}

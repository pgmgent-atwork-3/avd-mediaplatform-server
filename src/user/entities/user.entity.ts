import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Video } from 'src/video/entities/video.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import {
  OneToMany,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

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

  // @BeforeInsert()
  // async setPassword(password: string) {
  //   const salt = await bcrypt.genSalt(10);
  //   this.password = await bcrypt.hash(password || this.password, salt);
  // }
}

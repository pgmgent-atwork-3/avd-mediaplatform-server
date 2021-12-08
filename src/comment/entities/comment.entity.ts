import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Video } from 'src/video/entities/video.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  content: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.comments, { cascade: true })
  @JoinColumn({ name: 'userId' })
  @Field(() => User)
  user: User;

  @Column({ type: 'int', name: 'userId' })
  userId: number;

  @ManyToOne(() => Video, (video) => video.comments, { cascade: true })
  @JoinColumn({ name: 'videoId' })
  @Field(() => Video)
  video: Video;

  @Column({ type: 'int', name: 'videoId' })
  videoId: number;
}

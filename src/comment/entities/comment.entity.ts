import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric, IsDate, IsNumber } from 'class-validator';
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
  @IsAlphanumeric()
  content: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  @IsDate()
  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  @IsDate()
  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  @Field(() => User)
  user: User;

  @Column({ type: 'int', name: 'userId' })
  @IsNumber()
  userId: number;

  @ManyToOne(() => Video, (video) => video.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'videoId' })
  @Field(() => Video)
  video: Video;

  @IsNumber()
  @Column({ type: 'int', name: 'videoId' })
  videoId: number;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric, IsDate, IsFQDN } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
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
export class LiveHistory {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  title: string;

  @Column()
  @Field(() => String)
  @IsFQDN()
  url: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  thumbnail: string;

  @ManyToOne(() => User, (user) => user.liveHistories)
  @JoinColumn({ name: 'userId' })
  @Field(() => [User])
  user: User;

  @Column()
  @Field(() => Date)
  @IsDate()
  streamed_on: Date;

  @CreateDateColumn()
  @Field(() => Date)
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  @IsDate()
  updated_at: Date;
}

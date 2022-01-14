import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric, IsDate, IsFQDN } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class LiveUpcoming {
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

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  user: string;

  @Column()
  @Field(() => Date)
  @IsDate()
  start_date: Date;

  @CreateDateColumn()
  @Field(() => Date)
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  @IsDate()
  updated_at: Date;
}

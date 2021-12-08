import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
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

  @ManyToOne(() => User, (user) => user.comments)
  @Field(() => User)
  user: User;
}

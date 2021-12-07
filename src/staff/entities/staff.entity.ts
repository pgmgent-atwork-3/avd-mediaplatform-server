import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String, { nullable: false })
  username: string;

  @Column()
  @Field(() => String, { nullable: false })
  firstname: string;

  @Column()
  @Field(() => String, { nullable: false })
  lastname: string;

  @Column()
  @Field(() => String, { nullable: false })
  email: string;

  @Column()
  @Field(() => String, { nullable: false })
  password: string;
}

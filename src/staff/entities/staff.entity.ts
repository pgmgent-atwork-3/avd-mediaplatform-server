import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String, { nullable: false })
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;

  @Column()
  @Field(() => String, { nullable: false })
  @IsAlphanumeric()
  @IsNotEmpty()
  firstname: string;

  @Column()
  @Field(() => String, { nullable: false })
  @IsAlphanumeric()
  @IsNotEmpty()
  lastname: string;

  @Column()
  @Field(() => String, { nullable: false })
  @IsAlphanumeric()
  @IsNotEmpty()
  email: string;

  @Column()
  @Field(() => String, { nullable: false })
  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Column()
  @Field(() => String)
  @IsString()
  account_type: string;
}

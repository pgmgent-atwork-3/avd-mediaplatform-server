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

// import * as bcrypt from 'bcrypt';
import Role from '../enums/role.enum';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  firstname: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  lastname: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  email: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  profile_picture: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  @Field(() => String)
  @IsString()
  role: Role;

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

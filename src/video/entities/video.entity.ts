import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDate,
  IsFQDN,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { Comment } from 'src/comment/entities/comment.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Column,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class Video {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  @Field((type) => Number)
  id: number;

  @Column()
  @Field((type) => String)
  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @Column()
  @Field((type) => String)
  @IsAlphanumeric()
  description: string;

  @Column()
  @Field((type) => String)
  @IsFQDN()
  url: string;

  @Column()
  @Field((type) => String)
  @IsFQDN()
  thumbnail: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date, { nullable: true })
  @IsDate()
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date, { nullable: true })
  @IsDate()
  updatedAt?: Date;

  @OneToMany(() => Comment, (comment) => comment.video, {
    cascade: true,
  })
  @Field((type) => [Comment])
  comments: Comment[];

  @ManyToMany(() => User, (user) => user.videos, {
    cascade: true,
  })
  @JoinTable({
    name: 'user_video',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'video_id',
      referencedColumnName: 'id',
    },
  })
  @Field((type) => [User])
  users: User[];

  @ManyToMany(() => Tag, (tag) => tag.videos, { cascade: true })
  @JoinTable({
    name: 'video_tag',
    joinColumn: {
      name: 'video_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  @Field((type) => [Tag])
  tags: Tag[];
}

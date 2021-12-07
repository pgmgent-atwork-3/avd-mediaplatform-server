import { Field, ObjectType } from '@nestjs/graphql';
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
  title: string;

  @Column()
  @Field((type) => String)
  description: string;

  @Column()
  @Field((type) => String)
  url: string;

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

  @ManyToOne(() => User, (user) => user.videos)
  @Field((type) => [User])
  user: User;

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

import { Field, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class Video {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  title: string;

  @Field((type) => String)
  description: string;

  @Field((type) => String)
  url: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date)
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  @Field((type) => Date)
  updatedAt: Date;

  // @OneToMany(User)
  // @Field((type) => [User])
  // users: User[];

  // @ManyToMany(() => Tag, (tag) => tag.videos)
  // @Field((type) => [Tag])
  // tags: Tag[];
}

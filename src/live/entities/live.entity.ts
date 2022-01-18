import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  title: string;

  @Column()
  @Field(() => User)
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.lives, { cascade: true })
  @JoinTable({
    name: 'live_tag',
    joinColumn: { name: 'live_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag], { nullable: true })
  tags: Tag[];
}

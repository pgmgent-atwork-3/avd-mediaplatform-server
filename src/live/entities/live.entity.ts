import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';
import { Tag } from 'src/tag/entities/tag.entity';
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
  @Field(() => String)
  @IsAlphanumeric()
  user: string;

  @ManyToMany(() => Tag, (tag) => tag.lives, { cascade: true })
  @JoinTable({
    name: 'live_tag',
    joinColumn: { name: 'live_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag], { nullable: true })
  tags: Tag[];
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  title: string;

  @ManyToMany(() => Tag, (tag) => tag.lives, { cascade: true })
  @JoinTable({
    name: 'live_tag',
    joinColumn: { name: 'live_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag], { nullable: true })
  tags: Tag[];
}
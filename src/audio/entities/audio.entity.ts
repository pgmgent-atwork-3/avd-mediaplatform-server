import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Audio {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => String)
  soundcloud_url: string;

  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updated_at: Date;

  @ManyToMany(() => Tag, (tag) => tag.audios, { cascade: true })
  @JoinTable({
    name: 'audio_tag',
    joinColumn: { name: 'audio_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag])
  tags: Tag[];
}

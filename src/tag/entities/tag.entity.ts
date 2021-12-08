import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Live } from 'src/live/entities/live.entity';
import { Video } from 'src/video/entities/video.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Video, (video) => video.tags)
  @Field(() => [Video], { nullable: true })
  videos: Video[];

  @ManyToMany(() => Live, (live) => live.tags)
  @Field(() => [Live], { nullable: true })
  lives: Live[];
}

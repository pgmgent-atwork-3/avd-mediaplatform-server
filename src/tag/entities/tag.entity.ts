import { ObjectType, Field, Int } from '@nestjs/graphql';
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
}

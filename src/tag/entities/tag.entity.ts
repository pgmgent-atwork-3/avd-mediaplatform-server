import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';
import { Audio } from 'src/audio/entities/audio.entity';
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
  @IsAlphanumeric()
  name: string;

  @ManyToMany(() => Video, (video) => video.tags)
  @Field(() => [Video], { nullable: true })
  videos: Video[];

  @ManyToMany(() => Live, (live) => live.tags)
  @Field(() => [Live], { nullable: true })
  lives: Live[];

  @ManyToMany(() => Audio, (audio) => audio.tags)
  @Field(() => [Audio], { nullable: true })
  audios: Audio[];
}

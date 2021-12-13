import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Audio } from 'src/audio/entities/audio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class AudioPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String)
  url: string;

  @OneToMany(() => Audio, (audio) => audio.audio_picture)
  audios: Audio[];
}

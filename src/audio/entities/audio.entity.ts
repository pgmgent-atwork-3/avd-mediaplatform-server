import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AudioPicture } from 'src/audio-picture/entities/audio-picture.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => AudioPicture, (audiopicture) => audiopicture.audios)
  @Field(() => AudioPicture)
  audio_picture: AudioPicture;

  @Column({ type: 'int', name: 'audioPictureId' })
  audio_picture_id: number;

  @ManyToMany(() => Tag, (tag) => tag.audios, { cascade: true })
  @JoinTable({
    name: 'audio_tag',
    joinColumn: { name: 'audio_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag])
  tags: Tag[];
}

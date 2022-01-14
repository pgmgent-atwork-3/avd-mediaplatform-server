import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsAlpha, IsAlphanumeric, IsDate, IsFQDN } from 'class-validator';
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
  @IsAlphanumeric()
  title: string;

  @Column()
  @Field(() => String)
  @IsAlphanumeric()
  description: string;

  @Column()
  @Field(() => String)
  @IsFQDN()
  soundcloud_url: string;

  @CreateDateColumn()
  @IsDate()
  @Field(() => Date)
  created_at: Date;

  @UpdateDateColumn()
  @IsDate()
  @Field(() => Date)
  updated_at: Date;

  @ManyToOne(() => AudioPicture, (audiopicture) => audiopicture.audios)
  @Field(() => AudioPicture)
  audio_picture: AudioPicture;

  @Column({ type: 'int', name: 'audioPictureId' })
  audioPictureId: number;

  @ManyToMany(() => Tag, (tag) => tag.audios, { cascade: true })
  @JoinTable({
    name: 'audio_tag',
    joinColumn: { name: 'audio_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @Field(() => [Tag])
  tags: Tag[];
}

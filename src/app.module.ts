import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { StaffModule } from './staff/staff.module';
import { LiveModule } from './live/live.module';
import { AudioModule } from './audio/audio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
    }),
    VideoModule,
    UserModule,
    CommentModule,
    TagModule,
    StaffModule,
    LiveModule,
    AudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

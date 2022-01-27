import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Video } from 'src/video/entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Video])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}

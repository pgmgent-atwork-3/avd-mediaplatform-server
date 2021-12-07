import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoResolver } from './video.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [VideoResolver, VideoService],
  imports: [UserModule],
})
export class VideoModule {}

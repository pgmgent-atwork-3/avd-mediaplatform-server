import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, LocalStrategy],
})
export class AuthModule {}

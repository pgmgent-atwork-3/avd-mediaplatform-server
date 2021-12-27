import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret', // FIXME: move to env, process.env.JWT_SECRET
      logging: true,
    });
  }

  async validate(payload: any) {
    return {
      username: payload.username,
      userId: payload.sub,
      role: payload.role,
    };
  }
}

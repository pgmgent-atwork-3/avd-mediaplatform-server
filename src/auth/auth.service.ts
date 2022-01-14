import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/login-user.input';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);

    const isValid = await bcrypt.compare(password, user.password);

    if (user && isValid) {
      const { password, ...result } = user;
      return user;
    }

    return null;
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findByUsername(loginUserInput.username);
    const { password, ...result } = user;

    return {
      accessToken: this.jwtService.sign({
        username: user.username,
        sub: user.id,
        role: user.role,
      }),
      user: result,
    };
  }

  async signup(signupUserInput: CreateUserInput) {
    const user = await this.userService.findByUsername(
      signupUserInput.username,
    );

    if (user) {
      throw new Error('User already exists!');
    }

    console.log(signupUserInput);
    const hashedPassword = await bcrypt.hash(signupUserInput.password, 10);

    return this.userService.create({
      ...signupUserInput,
      password: hashedPassword,
    });
  }
}

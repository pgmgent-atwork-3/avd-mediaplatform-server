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

    if (!user) throw new Error('User does not exist!');

    const isValid = user && (await bcrypt.compare(password, user.password));

    if (user && isValid) {
      const { password, ...result } = user;
      return user;
    }

    // Will return 401 Unauthorized response, to which we can assume in the frontend that invalid credentials were provided
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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({ username });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, updateUserInput);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
    return user;
  }
}

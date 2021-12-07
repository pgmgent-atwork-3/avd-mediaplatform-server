import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff) private staffRepository: Repository<Staff>,
  ) {}

  async create(createStaffInput: CreateStaffInput) {
    const staff = this.staffRepository.create(createStaffInput);
    return await this.staffRepository.save(staff);
  }

  async findAll() {
    return await this.staffRepository.find();
  }

  async findOne(id: number) {
    return await this.staffRepository.findOne(id);
  }

  async update(id: number, updateStaffInput: UpdateStaffInput) {
    return await this.staffRepository.update(id, updateStaffInput);
  }

  async remove(id: number) {
    return await this.staffRepository.delete(id);
  }
}

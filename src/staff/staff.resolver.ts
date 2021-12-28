import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { Staff } from './entities/staff.entity';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import Role from 'src/user/enums/role.enum';
import RoleGuard from 'src/auth/role.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => Staff)
  @UseGuards(RoleGuard(Role.Admin))
  createStaff(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.staffService.create(createStaffInput);
  }

  @Query(() => [Staff], { name: 'staffs' })
  @UseGuards(RoleGuard(Role.Admin))
  findAll() {
    return this.staffService.findAll();
  }

  @Query(() => Staff, { name: 'staff' })
  @UseGuards(RoleGuard(Role.Admin))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.staffService.findOne(id);
  }

  @Mutation(() => Staff)
  @UseGuards(RoleGuard(Role.Admin))
  updateStaff(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation(() => Staff)
  @UseGuards(RoleGuard(Role.Admin))
  removeStaff(@Args('id', { type: () => Int }) id: number) {
    return this.staffService.remove(id);
  }
}

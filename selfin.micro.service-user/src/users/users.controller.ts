import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: UserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}

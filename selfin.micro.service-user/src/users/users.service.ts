import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository') private readonly usersRepository: typeof User,
  ) {}

  async create(createUserDto: UserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;

    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }
}

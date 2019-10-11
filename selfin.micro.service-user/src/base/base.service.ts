import { Inject, Injectable } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class BaseService<T extends BaseEntity<T>> {
  constructor(
    @Inject('Repository') private readonly repository: typeof T,
  ) {}

  async findAll(): Promise<T[]> {
    return await this.repository.findAll<T>();
  }
}

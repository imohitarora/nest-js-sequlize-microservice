import { Column, Model, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/base/base.entity';

@Table({
  tableName: 'users',
})
export class User extends BaseEntity<User> {
  @Column
  firstname: string;
}

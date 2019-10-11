import { Column, Model, Table } from 'sequelize-typescript';

export class BaseEntity<T> extends Model<T> {
  @Column
  name: string;

  @Column
  age: number;
}

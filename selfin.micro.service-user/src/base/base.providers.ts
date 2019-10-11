import { BaseEntity } from './base.entity';

export const baseProviders = [
  {
    provide: 'Repository',
    useValue: BaseEntity,
  },
];

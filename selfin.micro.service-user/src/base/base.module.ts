import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { baseProviders } from './base.providers';

@Module({
  providers: [BaseService, ...baseProviders],
})
export class BaseModule {}

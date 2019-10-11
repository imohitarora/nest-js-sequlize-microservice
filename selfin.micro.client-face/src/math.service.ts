import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { microserviceOptions } from './config/options/microservice.options';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(microserviceOptions);
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}

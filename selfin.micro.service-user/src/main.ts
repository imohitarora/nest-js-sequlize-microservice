import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { microserviceOptions } from './config/options/microservice.options';

// Create a logger instance
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();

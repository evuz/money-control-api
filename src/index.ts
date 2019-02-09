import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { domain } from './domain';

async function bootstrap() {
  await domain.get({ useCase: 'start_database' }).execute();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

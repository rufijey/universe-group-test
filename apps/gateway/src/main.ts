import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '60mb' }));
  app.use(urlencoded({ extended: true, limit: '60mb' }));

  app.enableShutdownHooks();

  await app.listen(process.env.port ?? 3000);

}
bootstrap();

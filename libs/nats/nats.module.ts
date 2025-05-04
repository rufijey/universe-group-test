import { Module } from '@nestjs/common';
import { NatsService } from './nats.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { JetStreamInitService } from '@libs/nats/jetstream-init.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../../.env.production'),
    }),
  ],
  controllers: [],
  providers: [NatsService, JetStreamInitService],
  exports: [NatsService],
})
export class NatsModule {}

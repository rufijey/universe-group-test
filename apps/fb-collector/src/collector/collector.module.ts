import { Module } from '@nestjs/common';
import { FbCollectorService } from './fb-collector.service';
import {PrismaModule} from '@libs/prisma';
import { NatsModule } from '@libs/nats';
import { CollectorMetricsModule } from '@libs/prometheus';
import { FacebookRepository } from './facebook.repository';

@Module({
  imports: [PrismaModule, NatsModule, CollectorMetricsModule],
  controllers: [],
  providers: [FbCollectorService, FacebookRepository],
})
export class CollectorModule {}

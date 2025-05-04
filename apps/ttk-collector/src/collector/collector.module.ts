import { Module } from '@nestjs/common';
import { TtkCollectorService } from './ttk-collector.service';
import { PrismaModule } from '@libs/prisma';
import { NatsModule } from '@libs/nats';
import { TiktokRepository } from './tiktok.repository';
import { CollectorMetricsModule } from '@libs/prometheus';

@Module({
  imports: [PrismaModule, NatsModule, CollectorMetricsModule],
  controllers: [],
  providers: [TtkCollectorService, TiktokRepository],
})
export class CollectorModule {}

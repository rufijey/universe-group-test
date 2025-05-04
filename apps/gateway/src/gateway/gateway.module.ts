import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { NatsModule } from '@libs/nats';
import { GatewayMetricsModule } from '@libs/prometheus';

@Module({
  imports: [NatsModule, GatewayMetricsModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}


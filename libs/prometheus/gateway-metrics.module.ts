import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsModule } from './metrics.module';
import { GatewayMetricsProviders } from './providers/gateway-metrics.providers';

@Module({
  imports: [MetricsModule],
  providers: [...GatewayMetricsProviders],
  exports: [...GatewayMetricsProviders],
})
export class GatewayMetricsModule {}
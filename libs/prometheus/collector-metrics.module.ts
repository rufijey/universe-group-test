import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsModule } from './metrics.module';
import { GatewayMetricsProviders } from './providers/gateway-metrics.providers';
import { CollectorsMetricsProviders } from './providers/collector-metrics.providers';

@Module({
  imports: [MetricsModule],
  providers: [...CollectorsMetricsProviders],
  exports: [...CollectorsMetricsProviders],
})
export class CollectorMetricsModule {}
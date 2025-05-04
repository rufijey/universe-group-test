import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsModule } from './metrics.module';
import { GatewayMetricsProviders } from './providers/gateway-metrics.providers';
import { ReporterMetricsProviders } from '@libs/prometheus/providers/reporter-metrics.providers';

@Module({
  imports: [MetricsModule],
  providers: [...ReporterMetricsProviders],
  exports: [...ReporterMetricsProviders],
})
export class ReporterMetricsModule {}
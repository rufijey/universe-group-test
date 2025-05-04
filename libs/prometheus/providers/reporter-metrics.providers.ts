import { makeHistogramProvider } from '@willsoto/nestjs-prometheus';

export const ReporterMetricsProviders = [
  makeHistogramProvider({
    name: 'REPORTER_LATENCY_SECONDS',
    help: 'Latency of reporter methods by category',
    labelNames: ['category'],
    buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2],
  }),
];
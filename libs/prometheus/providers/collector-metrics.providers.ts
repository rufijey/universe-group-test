import { makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

export const CollectorsMetricsProviders = [
  makeCounterProvider({
    name: 'COLLECTORS_ACCEPTED_EVENTS_TOTAL',
    help: 'Total number of events accepted by collectors',
    labelNames: ['platform'],
  }),
  makeCounterProvider({
    name: 'COLLECTORS_PROCESSED_EVENTS_TOTAL',
    help: 'Total number of successfully processed events in collectors',
    labelNames: ['platform'],
  }),
  makeCounterProvider({
    name: 'COLLECTORS_FAILED_EVENTS_TOTAL',
    help: 'Total number of failed events in collectors',
    labelNames: ['platform'],
  }),
];

import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

export const GatewayMetricsProviders = [
  makeCounterProvider({
    name: 'GATEWAY_ACCEPTED_EVENTS_TOTAL',
    help: 'Total number of accepted events in Gateway',
  }),
  makeCounterProvider({
    name: 'GATEWAY_PROCESSED_EVENTS_TOTAL',
    help: 'Total number of successfully processed events in Gateway',
  }),
  makeCounterProvider({
    name: 'GATEWAY_FAILED_EVENTS_TOTAL',
    help: 'Total number of failed events in Gateway',
  }),
];

import { z } from 'zod';
import { zodDateString } from '@libs/zod';

export const EventStatsSchema = z.object({
  from: zodDateString.optional(),
  to: zodDateString.optional(),
  source: z.enum(['facebook', 'tiktok']),
  funnelStage: z.string().optional(),
  eventType: z.string().optional(),
});

export type EventStatsDto = z.infer<typeof EventStatsSchema>;

import { z } from 'zod';
import { zodDateString } from '@libs/zod';

export const DemographicsSchema = z.object({
  from: zodDateString.optional(),
  to: zodDateString.optional(),
  source: z.enum(['facebook', 'tiktok']),
});

export type DemographicsDto = z.infer<typeof DemographicsSchema>;
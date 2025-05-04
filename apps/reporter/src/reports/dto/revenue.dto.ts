import { z } from 'zod';
import { zodDateString } from '@libs/zod';

export const RevenueSchema = z.object({
  from: zodDateString.optional(),
  to: zodDateString.optional(),
  source: z.enum(['facebook', 'tiktok']),
  campaignId: z.string().optional(),
});

export type RevenueDto = z.infer<typeof RevenueSchema>;
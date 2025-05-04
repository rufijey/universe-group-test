import { z } from 'zod';
import { zodDateString } from '@libs/zod';

export const FunnelStageSchema = z.union([
  z.literal("top"),
  z.literal("bottom"),
]);

export const TiktokUserSchema = z.object({
  userId: z.string(),
  username: z.string(),
  followers: z.number(),
});

export const TiktokEngagementTopSchema = z.object({
  watchTime: z.number(),
  percentageWatched: z.number(),
  device: z.enum(["Android", "iOS", "Desktop"]),
  country: z.string(),
  videoId: z.string(),
});

export const TiktokEngagementBottomSchema = z.object({
  actionTime: z.string(),
  profileId: z.string().nullable(),
  purchasedItem: z.string().nullable(),
  purchaseAmount: z.string().nullable(),
});

export const TiktokEventSchema = z.object({
  eventId: z.string(),
  timestamp: zodDateString,
  source: z.literal("tiktok"),
  funnelStage: FunnelStageSchema,
  eventType: z.union([
    z.literal("video.view"),
    z.literal("like"),
    z.literal("share"),
    z.literal("comment"),
    z.literal("profile.visit"),
    z.literal("purchase"),
    z.literal("follow"),
  ]),
  data: z.object({
    user: TiktokUserSchema,
    engagement: z.union([
      TiktokEngagementTopSchema,
      TiktokEngagementBottomSchema,
    ]),
  }),
});
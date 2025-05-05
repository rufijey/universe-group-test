import { z } from "zod";
import { zodDateString } from '@libs/zod';

export const FunnelStageSchema = z.union([
  z.literal("top"),
  z.literal("bottom"),
]);

export const FacebookUserSchema = z.object({
  userId: z.string(),
  name: z.string(),
  age: z.number(),
  gender: z.enum(["male", "female", "non-binary"]),
  location: z.object({
    country: z.string(),
    city: z.string(),
  }),
});

export const FacebookEngagementTopSchema = z.object({
  actionTime: zodDateString,
  referrer: z.enum(["newsfeed", "marketplace", "groups"]),
  videoId: z.string().nullable(),
});

export const FacebookEngagementBottomSchema = z.object({
  adId: z.string(),
  campaignId: z.string(),
  clickPosition: z.enum(["top_left", "bottom_right", "center"]),
  device: z.enum(["mobile", "desktop"]),
  browser: z.enum(["Chrome", "Firefox", "Safari"]),
  purchaseAmount: z.string().nullable(),
});

export const FacebookEventSchema = z.object({
  eventId: z.string(),
  timestamp: zodDateString,
  source: z.literal("facebook"),
  funnelStage: FunnelStageSchema,
  eventType: z.union([
    z.literal("ad.view"),
    z.literal("page.like"),
    z.literal("comment"),
    z.literal("video.view"),
    z.literal("ad.click"),
    z.literal("form.submission"),
    z.literal("checkout.complete"),
  ]),
  data: z.object({
    user: FacebookUserSchema,
    engagement: z.union([
      FacebookEngagementTopSchema,
      FacebookEngagementBottomSchema,
    ]),
  }),
});

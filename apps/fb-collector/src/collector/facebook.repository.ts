import { Injectable } from '@nestjs/common';
import { FacebookEvent, FacebookUser, TiktokEvent, TiktokUser } from '@libs/types';
import { NatsService } from '@libs/nats';
import { PrismaService } from '@libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';


@Injectable()
export class FacebookRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async createUser(user: FacebookUser){

    await this.prisma.facebookUser.upsert({
      where: { userId: user.userId },
      update: {},
      create: {
        userId: user.userId,
        name: user.name,
        age: user.age,
        gender: user.gender,
        country: user.location.country,
        city: user.location.city,
      },
    });
  }

  async createEvent(event: FacebookEvent) {
    await this.prisma.facebookEvent.upsert({
      where: { eventId: event.eventId },
      update: {},
      create: {
        eventId: event.eventId,
        timestamp: new Date(event.timestamp),
        funnelStage: event.funnelStage,
        eventType: event.eventType,
        userId: event.data.user.userId,
        ...(event.funnelStage === "top" && {
          engagementTop: {
            create: {
              actionTime: new Date((event.data.engagement as any).actionTime),
              referrer: (event.data.engagement as any).referrer,
              videoId: (event.data.engagement as any).videoId,
            },
          },
        }),
        ...(event.funnelStage === "bottom" && {
          engagementBottom: {
            create: {
              adId: (event.data.engagement as any).adId,
              campaignId: (event.data.engagement as any).campaignId,
              clickPosition: (event.data.engagement as any).clickPosition,
              device: (event.data.engagement as any).device,
              browser: (event.data.engagement as any).browser,
              purchaseAmount: (event.data.engagement as any).purchaseAmount
                ? new Decimal((event.data.engagement as any).purchaseAmount).toDecimalPlaces(2)
                : null,
            },
          },
        }),
      },
    });
  }

}
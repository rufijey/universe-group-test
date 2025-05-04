import { Injectable } from '@nestjs/common';
import { TiktokEvent, TiktokUser } from '@libs/types';
import { NatsService } from '@libs/nats';
import { PrismaService } from '@libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';


@Injectable()
export class TiktokRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async createUser(user: TiktokUser){
    await this.prisma.tiktokUser.upsert({
      where: { userId: user.userId },
      update: {
        username: user.username,
        followers: user.followers,
      },
      create: {
        userId: user.userId,
        username: user.username,
        followers: user.followers,
      },
    });
  }

  async createEvent(event: TiktokEvent) {
    await this.prisma.tiktokEvent.upsert({
      where: { eventId: event.eventId },
      update: {},
      create: {
        eventId: event.eventId,
        timestamp: new Date(event.timestamp),
        funnelStage: event.funnelStage,
        eventType: event.eventType,
        userId: event.data.user.userId,
        ...(event.funnelStage === 'top' && {
          engagementTop: {
            create: {
              watchTime: (event.data.engagement as any).watchTime,
              percentageWatched: (event.data.engagement as any).percentageWatched,
              device: (event.data.engagement as any).device,
              country: (event.data.engagement as any).country,
              videoId: (event.data.engagement as any).videoId,
            },
          },
        }),
        ...(event.funnelStage === 'bottom' && {
          engagementBottom: {
            create: {
              actionTime: new Date((event.data.engagement as any).actionTime),
              profileId: (event.data.engagement as any).profileId,
              purchasedItem: (event.data.engagement as any).purchasedItem,
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
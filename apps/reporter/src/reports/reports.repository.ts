import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { EventStatsResultDto } from './dto/event-stats-result.dto';
import { RevenueResultDto } from './dto/revenue-result.dto';
import { FacebookDemographicsDto, TiktokDemographicsDto } from './dto/demographics-result.dto';
import { DemographicsFilter, EventStatsFilter, RevenueFilter } from './types/filter.interfaces';

@Injectable()
export class ReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getEventStatsFromFacebook(
    filters: EventStatsFilter
  ): Promise<EventStatsResultDto[]> {
    const result = await this.prisma.facebookEvent.groupBy({
      by: ['eventType'],
      where: filters,
      _count: {
        _all: true,
      },
    });

    return result.map((item) => ({
      eventType: item.eventType,
      count: item._count._all,
    }));
  }

  async getEventStatsFromTiktok(
    filters: EventStatsFilter
  ): Promise<EventStatsResultDto[]> {
    const result = await this.prisma.tiktokEvent.groupBy({
      by: ['eventType'],
      where: filters,
      _count: {
        _all: true,
      },
    });

    return result.map((item) => ({
      eventType: item.eventType,
      count: item._count._all,
    }));
  }

  async getRevenueDataFromFacebook(
    filter: RevenueFilter,
  ): Promise<RevenueResultDto> {
    const result = await this.prisma.facebookEngagementBottom.aggregate({
      _sum: { purchaseAmount: true },
      where: {
        purchaseAmount: { not: null },
        facebookEvent: {
          timestamp: filter.timestamp,
        },
        ...(filter.campaignId && {campaignId: filter.campaignId }),
      },
    });

    return {
      purchaseAmount: result._sum.purchaseAmount?.toNumber() ?? 0,
    };
  }

  async getRevenueDataFromTiktok(
    filter: RevenueFilter
  ): Promise<RevenueResultDto> {
    const result = await this.prisma.tiktokEngagementBottom.aggregate({
      _sum: { purchaseAmount: true },
      where: {
        purchaseAmount: { not: null },
        tiktokEvent: {
          timestamp: filter.timestamp,
        },
      },
    });

    return {
      purchaseAmount: result._sum.purchaseAmount?.toNumber() ?? 0,
    };
  }

  async getDemographicsFromFacebook(
    timestampFilter: DemographicsFilter
  ): Promise<FacebookDemographicsDto[]> {
    const result = await this.prisma.facebookUser.findMany({
      where: {
        events: {
          some: { timestamp: timestampFilter.timestamp },
        },
      },
      select: {
        userId: true,
        age: true,
        gender: true,
        country: true,
        city: true,
      },
    });

    return result.map((user) => ({
      userId: user.userId,
      age: user.age,
      gender: user.gender,
      country: user.country,
      city: user.city,
    }));
  }

  async getDemographicsFromTiktok(
    timestampFilter: DemographicsFilter
  ): Promise<TiktokDemographicsDto[]> {
    const result = await this.prisma.tiktokUser.findMany({
      where: {
        events: {
          some: { timestamp: timestampFilter.timestamp },
        },
      },
      select: {
        userId: true,
        username: true,
        followers: true,
      },
    });

    return result.map((user) => ({
      userId: user.userId,
      username: user.username,
      followers: user.followers,
    }));
  }
}

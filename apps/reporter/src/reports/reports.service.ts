import { Injectable } from '@nestjs/common';
import { ReportsRepository } from './reports.repository';
import { EventStatsDto } from './dto/event-stats.dto';
import { RevenueDto } from './dto/revenue.dto';
import { DemographicsDto } from './dto/demographics.dto';
import { EventStatsResultDto } from './dto/event-stats-result.dto';
import { RevenueResultDto } from './dto/revenue-result.dto';
import { FacebookDemographicsDto, TiktokDemographicsDto } from './dto/demographics-result.dto';
import { RevenueFilter } from './types/filter.interfaces';
import { Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsRepository: ReportsRepository,
              @InjectMetric('REPORTER_LATENCY_SECONDS')
              private readonly reporterLatency: Histogram<string>,
              ) {}

  async getEventStats(dto: EventStatsDto): Promise<EventStatsResultDto[]> {

    const end = this.reporterLatency.startTimer({ category: 'getEventStats' });

    try {
      const { from, to, source, funnelStage, eventType } = dto;
      const filters = {
        timestamp: {
          ...(from && { gte: from }),
          ...(to && { lte: to }),
        },
        ...(funnelStage && { funnelStage }),
        ...(eventType && { eventType }),
      };

      if (source === 'facebook') {
        return this.reportsRepository.getEventStatsFromFacebook(filters);
      }

      if (source === 'tiktok') {
        return this.reportsRepository.getEventStatsFromTiktok(filters);
      }

      throw new Error('Unsupported source');

    }catch (err){
      throw err;
    }finally {
      end();
    }
  }

  async getRevenueData(dto: RevenueDto): Promise<RevenueResultDto> {

    const end = this.reporterLatency.startTimer({ category: 'getRevenueData' });

    try {
      const { from, to, source, campaignId } = dto;
      const filter = {
        timestamp: {
          ...(from && { gte: from }),
          ...(to && { lte: to }),
        },
        ...(campaignId && { campaignId }),
      };

      if (source === 'facebook') {
        return this.reportsRepository.getRevenueDataFromFacebook(filter);
      }

      if (source === 'tiktok') {
        return this.reportsRepository.getRevenueDataFromTiktok(filter);
      }

      throw new Error('Unsupported source');

    }catch (err){
      throw err;
    }finally {
      end();
    }

  }

  async getDemographics(
    dto: DemographicsDto
  ): Promise<(FacebookDemographicsDto | TiktokDemographicsDto)[]> {

    const end = this.reporterLatency.startTimer({ category: 'getDemographics' });

    try {
      const { from, to, source } = dto;
      const filter = {
        timestamp: {
          ...(from && { gte: from }),
          ...(to && { lte: to }),
        },
      };

      if (source === 'facebook') {
        return this.reportsRepository.getDemographicsFromFacebook(filter);
      }

      if (source === 'tiktok') {
        return this.reportsRepository.getDemographicsFromTiktok(filter);
      }

      throw new Error('Unsupported source');

    }catch (err){
      throw err;
    }finally {
      end();
    }

  }
}

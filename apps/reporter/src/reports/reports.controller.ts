import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { EventStatsSchema, EventStatsDto } from './dto/event-stats.dto';
import { RevenueSchema, RevenueDto } from './dto/revenue.dto';
import { DemographicsSchema, DemographicsDto } from './dto/demographics.dto';
import { ZodValidationPipe } from '@libs/zod'

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('events')
  getEventStats(
    @Query(new ZodValidationPipe(EventStatsSchema)) query: EventStatsDto,
  ) {
    return this.reportsService.getEventStats(query);
  }

  @Get('revenue')
  getRevenueData(
    @Query(new ZodValidationPipe(RevenueSchema)) query: RevenueDto,
  ) {
    return this.reportsService.getRevenueData(query);
  }

  @Get('demographics')
  getDemographics(
    @Query(new ZodValidationPipe(DemographicsSchema)) query: DemographicsDto,
  ) {
    return this.reportsService.getDemographics(query);
  }
}

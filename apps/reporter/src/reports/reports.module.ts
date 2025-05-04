import { Module } from '@nestjs/common';
import { PrismaModule } from '@libs/prisma';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { ReportsRepository } from './reports.repository';
import { ReporterMetricsModule } from '@libs/prometheus/reporter-metrics.module';

@Module({
  imports: [PrismaModule, ReporterMetricsModule],
  controllers: [ReportsController],
  providers: [ReportsService, ReportsRepository],
})
export class ReportsModule {}

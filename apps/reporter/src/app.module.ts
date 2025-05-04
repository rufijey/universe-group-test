import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { HealthModule } from '@libs/health';

@Module({
  imports: [ReportsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

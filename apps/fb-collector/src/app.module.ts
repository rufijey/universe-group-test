import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { CollectorModule } from './collector/collector.module';
import { HealthModule } from '@libs/health';

@Module({
  imports: [CollectorModule, HealthModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}

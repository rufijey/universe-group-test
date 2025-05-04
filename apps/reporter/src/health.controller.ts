import { Controller, Get } from '@nestjs/common';
import { HealthService } from '@libs/health/health.service';


@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('liveness')
  checkLiveness() {
    return { status: 'ok' };
  }

  @Get('readiness')
  async checkReadiness() {
    await this.healthService.checkDatabase();
    return { status: 'ready' };
  }
}

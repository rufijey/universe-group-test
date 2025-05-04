import { Controller, Get } from '@nestjs/common';
import { HealthService } from '@libs/health';



@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('liveness')
  checkLiveness() {
    return { status: 'ok' };
  }

  @Get('readiness')
  async checkReadiness() {
    await this.healthService.checkNats();
    return { status: 'ready' };
  }
}

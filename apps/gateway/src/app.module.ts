import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { HealthController } from './health.controller';
import { HealthModule } from '@libs/health';


@Module({
  imports: [GatewayModule, HealthModule],
  controllers: [HealthController],
  providers: [],
})

export class AppModule {}

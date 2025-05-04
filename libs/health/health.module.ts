import { Module } from '@nestjs/common';
import { HealthService } from '@libs/health/health.service';
import { NatsModule} from '@libs/nats';
import { PrismaModule } from '@libs/prisma';


@Module({
  imports: [NatsModule, PrismaModule],
  controllers: [],
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}

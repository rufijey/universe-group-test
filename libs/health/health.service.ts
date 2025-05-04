import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { NatsService } from '@libs/nats';

@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly natsService: NatsService,
  ) {}

  async checkDatabase(): Promise<void> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch (error) {
      this.logger.error('Database health check failed', error);
      throw new InternalServerErrorException('Database is not healthy');
    }
  }

  async checkNats(): Promise<void> {
    try {
      const jsm = this.natsService.getJetStreamManager();
      await jsm.streams.info('events_facebook');
      await jsm.streams.info('events_tiktok');
    } catch (error) {
      this.logger.error('NATS stream check failed', error);
      throw new InternalServerErrorException('NATS is not healthy');
    }
  }
}

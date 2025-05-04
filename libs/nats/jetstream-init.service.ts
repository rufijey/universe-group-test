import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { connect, JetStreamManager, RetentionPolicy, StorageType } from 'nats';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JetStreamInitService implements OnModuleInit {
  private readonly logger = new Logger(JetStreamInitService.name);

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    try {
      const nc = await connect({
        servers: this.configService.get<string>('NATS_URL'),
      });
      const jsm: JetStreamManager = await nc.jetstreamManager();

      await this.createStream(jsm, 'events_facebook', ['events.facebook']);
      await this.createStream(jsm, 'events_tiktok', ['events.tiktok']);

      await nc.close();
    } catch (error) {
      this.logger.error('Failed to initialize JetStream', error);
    }
  }

  private async createStream(
    jsm: JetStreamManager,
    name: string,
    subjects: string[],
  ) {
    try {
      await jsm.streams.add({
        name,
        subjects,
        retention: RetentionPolicy.Limits,
        storage: StorageType.File,
        max_msgs: -1,
        max_bytes: -1,
        max_age: 0,
      });
      this.logger.log(`Stream "${name}" created`);
    } catch (err: any) {
      if (
        err.code === '400' &&
        err.message?.includes('stream name already in use')
      ) {
        this.logger.log(`Stream "${name}" already exists`);
      } else {
        this.logger.error(`Error creating stream "${name}"`, err);
      }
    }
  }
}

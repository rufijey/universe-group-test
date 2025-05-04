import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { NatsService } from "@libs/nats";

import {
  Event,
  FacebookEngagementBottom,
  FacebookEngagementTop,
} from "@libs/types";
import { FacebookRepository } from './facebook.repository';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class FbCollectorService implements OnModuleInit {
  private readonly logger = new Logger(FbCollectorService.name);
  private readonly DURABLE_NAME = "fb-collector-durable";
  private readonly SUBJECT = "events.facebook";

  constructor(
    private readonly natsService: NatsService,
    private readonly repository: FacebookRepository,
    @InjectMetric("COLLECTORS_ACCEPTED_EVENTS_TOTAL")
    private readonly acceptedEvents: Counter<"platform">,
    @InjectMetric("COLLECTORS_PROCESSED_EVENTS_TOTAL")
    private readonly processedEvents: Counter<"platform">,
    @InjectMetric("COLLECTORS_FAILED_EVENTS_TOTAL")
    private readonly failedEvents: Counter<"platform">,
  ) {}

  async onModuleInit() {
    await this.natsService.subscribe(
      this.SUBJECT,
      async (event, headers) => {
        await this.handleFacebookEvent(event, headers?.["x-correlation-id"]);
      },
      this.DURABLE_NAME,
    );
  }

  private async handleFacebookEvent(event: Event, correlationId?: string) {
    this.acceptedEvents.inc({ platform: "facebook" });

    try {

      if (event.source !== "facebook") {
        throw new Error("Invalid event source, expected Facebook");
      }

      await this.repository.creatUser(event.data.user);
      await this.repository.createEvent(event);

      this.processedEvents.inc({ platform: "facebook" });

      // this.logger.log(`[${correlationId}] FB event ${event.eventId} saved`);
    } catch (err) {

      this.failedEvents.inc({ platform: "facebook" });
      this.logger.error(
        `[${correlationId}] Failed to process FB event ${event.eventId}`,
        // err instanceof Error ? err.stack : err,
      );
      throw err;
    }
  }
}

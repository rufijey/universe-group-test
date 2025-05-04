import { Inject, Injectable, Logger } from "@nestjs/common";
import { Counter } from "prom-client";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { NatsService } from "@libs/nats";
import { Event } from "@libs/types";
import { FacebookEventSchema } from "./schema/facebook-event.schema";
import { TiktokEventSchema } from "./schema/tiktok-event.schema";
import { ZodError } from "zod";

@Injectable()
export class GatewayService {
  private readonly logger = new Logger(GatewayService.name);

  constructor(
    private readonly publisher: NatsService,
    @InjectMetric("GATEWAY_ACCEPTED_EVENTS_TOTAL")
    private readonly acceptedCounter: Counter<string>,
    @InjectMetric("GATEWAY_PROCESSED_EVENTS_TOTAL")
    private readonly processedCounter: Counter<string>,
    @InjectMetric("GATEWAY_FAILED_EVENTS_TOTAL")
    private readonly failedCounter: Counter<string>,
  ) {}

  async handleEvents(events: Event[], correlationId: string): Promise<void> {
    this.acceptedCounter.inc(events.length);
    let processedCount = 0;
    let failedCount = 0;

    for (const event of events) {
      try {
        switch (event.source) {
          case "facebook":
            FacebookEventSchema.parse(event);
            break;
          case "tiktok":
            TiktokEventSchema.parse(event);
            break;
          default:
            throw new Error(`Unknown event source`);
        }

        new Date(event.timestamp)

        const topic = this.getTopicForEvent(event);

        await this.publisher.publish(topic, event, correlationId);

        this.processedCounter.inc();
        processedCount++;
        // this.logger.log(`[${correlationId}] Published event to ${topic}`);
      } catch (err) {
        this.failedCounter.inc();
        failedCount++;

        if (err instanceof ZodError) {
          this.logger.error(
            `[${correlationId}] Event validation failed for ${event.source}`,
          );
        } else {
          this.logger.error(
            `[${correlationId}] Failed to publish event to ${this.getTopicForEvent(event)}`,
          );
        }
      }
    }

    this.logger.log(
      `[${correlationId}] Events processing summary: ` +
      `Total received: ${events.length}, ` +
      `Successfully processed: ${processedCount}, ` +
      `Failed: ${failedCount}`
    );
  }

  private getTopicForEvent(event: Event): string {
    return `events.${event.source}`;
  }
}
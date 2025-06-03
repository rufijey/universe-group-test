import { Inject, Injectable, Logger } from "@nestjs/common";
import { Counter } from "prom-client";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { NatsService } from "@libs/nats";
import { Event } from "@libs/types";

@Injectable()
export class GatewayService {
  private readonly logger = new Logger(GatewayService.name);

  constructor(
    private readonly natsService: NatsService,
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
        new Date(event.timestamp);

        if(!event.source){
          throw new Error(`No event source`);
        }

        const topic = this.getTopicForEvent(event);

        await this.natsService.publish(topic, event, correlationId);

        this.processedCounter.inc();
        processedCount++;
        // this.logger.log(`[${correlationId}] Published event to ${topic}`);
      } catch (err) {
        this.failedCounter.inc();
        failedCount++;

        this.logger.error(
          `[${correlationId}] Failed to publish event to ${this.getTopicForEvent(event)}`,
        );
      }
    }

    this.logger.log(
      `[${correlationId}] Events processing summary: ` +
        `Total received: ${events.length}, ` +
        `Successfully processed: ${processedCount}, ` +
        `Failed: ${failedCount}`,
    );
  }

  private getTopicForEvent(event: Event): string {
    return `events.${event.source}`;
  }
}

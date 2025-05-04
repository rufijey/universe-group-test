import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { NatsService } from "@libs/nats";
import { PrismaService } from "@libs/prisma";
import { Event } from "@libs/types";
import { Decimal } from "@prisma/client/runtime/library";
import { TiktokRepository } from "./tiktok.repository";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter, Histogram } from "prom-client";

@Injectable()
export class TtkCollectorService implements OnModuleInit {
  private readonly logger = new Logger(TtkCollectorService.name);
  private readonly DURABLE_NAME = "ttk-collector-durable";
  private readonly SUBJECT = "events.tiktok";

  constructor(
    private readonly natsService: NatsService,
    private readonly repository: TiktokRepository,
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
        await this.handleTiktokEvent(event, headers?.["x-correlation-id"]);
      },
      this.DURABLE_NAME,
    );
  }

  private async handleTiktokEvent(event: Event, correlationId?: string) {
    this.acceptedEvents.inc({ platform: "tiktok" });

    try {
      if (event.source !== "tiktok") {
        throw new Error("Invalid event source, expected TikTok");
      }

      await this.repository.createUser(event.data.user);
      await this.repository.createEvent(event);

      this.processedEvents.inc({ platform: "tiktok" });

      // this.logger.log(`[${correlationId}] TTK event ${event.eventId} saved`);

    } catch (err) {

      this.failedEvents.inc({ platform: "tiktok" });

      this.logger.error(
        `[${correlationId}] Failed to process TTK event ${event.eventId}`,
        // err instanceof Error ? err.stack : err,
      );

      throw err;
    }
  }
}

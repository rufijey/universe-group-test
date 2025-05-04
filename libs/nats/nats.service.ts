import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from "@nestjs/common";
import {
  connect,
  NatsConnection,
  JetStreamClient,
  StringCodec,
  JetStreamSubscription,
  headers,
  JsMsg,
  ConsumerConfig,
  consumerOpts, JetStreamManager,
} from 'nats';
import { Event } from "@libs/types";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(NatsService.name);
  protected nc: NatsConnection;
  protected js: JetStreamClient;
  private jsm: JetStreamManager;
  protected readonly sc = StringCodec();
  private subscriptions: JetStreamSubscription[] = [];

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    try {
      this.nc = await connect({
        servers: this.configService.get<string>("NATS_URL"),
      });
      this.js = this.nc.jetstream();
      this.jsm = await this.nc.jetstreamManager();
      this.logger.log("Connected to NATS server");
    } catch (err) {
      this.logger.error("Failed to connect to NATS", err);
      throw err;
    }
  }

  async subscribe(
    subject: string,
    callback: (data: Event, headers?: Record<string, string>) => Promise<void>,
    durableName?: string,
  ): Promise<JetStreamSubscription> {
    try {
      const deliverTo = `${subject}.${durableName || "default-durable"}.deliver`;

      const opts = consumerOpts()
        .deliverAll()
        .ackExplicit()
        .durable(durableName || "default-durable")
        .deliverTo(deliverTo)
        .manualAck()
        .replayInstantly();

      const sub = await this.js.subscribe(subject, opts);
      this.logger.log(`Successfully subscribed to ${subject}`);

      (async () => {
        for await (const msg of sub) {
          try {
            const data = JSON.parse(this.sc.decode(msg.data)) as Event;

            let msgHeaders: Record<string, string> | undefined;
            if (msg.headers) {
              msgHeaders = {};
              for (const [key, values] of Object.entries(msg.headers)) {
                msgHeaders[key] = Array.isArray(values) ? values[0] : values;
              }
            }

            await callback(data, msgHeaders);
            msg.ack();
          } catch (err) {
            this.logger.error(`Error processing message on ${subject}`, err);
          }
        }
      })().catch((err) => {
        this.logger.error(`Subscription loop error for ${subject}`, err);
      });

      this.subscriptions.push(sub);
      return sub;
    } catch (err) {
      this.logger.error(`Failed to subscribe to ${subject}`, err);
      throw err;
    }
  }

  async publish(subject: string, data: Event, correlationId: string) {
    const hdrs = headers();
    hdrs.set("x-correlation-id", correlationId);

    await this.js.publish(subject, this.sc.encode(JSON.stringify(data)), {
      headers: hdrs,
    });

  }

  getJetStreamManager(): JetStreamManager {
    if (!this.jsm) {
      throw new Error('JetStreamManager is not initialized');
    }
    return this.jsm;
  }

  async onModuleDestroy() {
    for (const sub of this.subscriptions) {
      await sub.drain();
    }
    await this.nc?.drain();
    this.logger.log("NATS connection drained");
  }
}

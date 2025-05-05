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
  headers,
  JsMsg,
  AckPolicy,
  DeliverPolicy,
  ReplayPolicy,
  JetStreamManager,
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
  private isRunning = true;

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
    streamName: string,
    subject: string,
    callback: (data: Event, headers?: Record<string, string>) => Promise<void>,
    durableName?: string,
  ): Promise<void> {
    try {
      const consumerName = durableName || `consumer-${streamName}`;

      await this.jsm.streams.info(streamName);
      this.logger.log(`Stream "${streamName}" found`);

      try {
        await this.jsm.consumers.add(streamName, {
          durable_name: consumerName,
          ack_policy: AckPolicy.Explicit,
          deliver_policy: DeliverPolicy.All,
          replay_policy: ReplayPolicy.Instant,
          filter_subject: subject,
        });
        this.logger.log(`Consumer "${consumerName}" created in stream "${streamName}"`);
      } catch (err) {
        if (!err.message.includes("already exists")) {
          throw err;
        }
        this.logger.log(`Consumer "${consumerName}" already exists`);
      }

      const consumer = await this.js.consumers.get(streamName, consumerName);
      this.logger.log(`Subscribed to "${subject}" in stream "${streamName}"`);

      (async () => {
        while (this.isRunning) {
          try {
            const messages = await consumer.consume();
            for await (const msg of messages) {
              if (!this.isRunning) break;

              try {
                const data = JSON.parse(this.sc.decode(msg.data)) as Event;
                const msgHeaders = this.parseHeaders(msg.headers);
                await callback(data, msgHeaders);
                msg.ack();
              } catch (err) {
                this.logger.error(`Error processing message: ${err.message}`);
              }
            }
          } catch (err) {
            this.logger.error(`Consume error: ${err.message}`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка перед повторной попыткой
          }
        }
      })().catch(err => {
        this.logger.error(`Subscription loop crashed: ${err.message}`);
      });

    } catch (err) {
      this.logger.error(
        `Failed to subscribe to stream "${streamName}" (subject: "${subject}")`,
        err,
      );
      throw err;
    }
  }


  async publish(
    subject: string,
    data: Event,
    correlationId: string,
  ): Promise<void> {
    const hdrs = headers();
    hdrs.set("x-correlation-id", correlationId);

    await this.js.publish(subject, this.sc.encode(JSON.stringify(data)), {
      headers: hdrs,
    });
  }

  private parseHeaders(msgHeaders?: any): Record<string, string> | undefined {
    if (!msgHeaders) return undefined;
    const headers: Record<string, string> = {};
    for (const [key, values] of Object.entries(msgHeaders)) {
      headers[key] = Array.isArray(values) ? values[0] : values;
    }
    return headers;
  }

  getJetStreamManager(): JetStreamManager {
    if (!this.jsm) {
      throw new Error('JetStreamManager is not initialized');
    }
    return this.jsm;
  }

  async onModuleDestroy() {
    this.isRunning = false;
    await this.nc?.drain();
    this.logger.log("NATS connection closed gracefully");
  }
}
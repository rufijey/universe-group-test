import { Controller, Post, Body, Headers, Get } from "@nestjs/common";
import { GatewayService } from "./gateway.service";
import { Event } from "@libs/types";

import { v4 as uuidv4 } from 'uuid';

@Controller()
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
  ) {}


  @Post("events")
  async handleIncomingEvent(
    @Body() events: Event[],
    @Headers("x-correlation-id") correlationIdHeader?: string,
  ) {
    const correlationId = correlationIdHeader?.trim() || uuidv4();
    await this.gatewayService.handleEvents(events, correlationId);

    return { status: 'ok', correlationId };
  }
}

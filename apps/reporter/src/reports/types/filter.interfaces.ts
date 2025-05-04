// event-stats-filter.interface.ts
export interface EventStatsFilter {
  timestamp?: {
    gte?: Date;
    lte?: Date;
  };
  funnelStage?: string;
  eventType?: string;
}
// revenue-filter.interface.ts
export interface RevenueFilter {
  timestamp?: {
    gte?: Date;
    lte?: Date;
  };
  campaignId?: string;
}
// demographics-filter.interface.ts
export interface DemographicsFilter {
  timestamp?: {
    gte?: Date;
    lte?: Date;
  };
}

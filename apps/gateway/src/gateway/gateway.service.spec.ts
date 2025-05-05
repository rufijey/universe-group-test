import { Test, TestingModule } from '@nestjs/testing';
import { GatewayService } from './gateway.service';
import { NatsService } from '@libs/nats';
import { FacebookEvent, TiktokEvent } from '@libs/types';

describe('GatewayService', () => {
  let service: GatewayService;
  let natsService: NatsService;

  const acceptedCounter = { inc: jest.fn() };
  const processedCounter = { inc: jest.fn() };
  const failedCounter = { inc: jest.fn() };

  const mockNatsService = {
    publish: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GatewayService,
        { provide: NatsService, useValue: mockNatsService },
        { provide: 'PROM_METRIC_GATEWAY_ACCEPTED_EVENTS_TOTAL', useValue: acceptedCounter },
        { provide: 'PROM_METRIC_GATEWAY_PROCESSED_EVENTS_TOTAL', useValue: processedCounter },
        { provide: 'PROM_METRIC_GATEWAY_FAILED_EVENTS_TOTAL', useValue: failedCounter },
      ],
    }).compile();

    service = module.get<GatewayService>(GatewayService);
    natsService = module.get<NatsService>(NatsService);

    jest.clearAllMocks();
  });

  it('should publish and increment acceptedCounter and processedCounter for FacebookEvent', async () => {
    const facebookEvent: FacebookEvent = {
      eventId: 'fb-1',
      timestamp: new Date().toISOString(),
      source: 'facebook',
      funnelStage: 'top',
      eventType: 'video.view',
      data: {
        user: {
          userId: 'user-1',
          name: 'John Doe',
          age: 30,
          gender: 'male',
          location: {
            city: 'Kyiv',
            country: 'UA',
          },
        },
        engagement: {
          referrer: 'newsfeed',
          videoId: 'vid-123',
          actionTime: new Date().toISOString(),
        },
      },
    };

    await service.handleEvents([facebookEvent], 'test-corr-id');

    expect(acceptedCounter.inc).toHaveBeenCalledWith(1);
    expect(processedCounter.inc).toHaveBeenCalledTimes(1);
    expect(failedCounter.inc).not.toHaveBeenCalled();
    expect(natsService.publish).toHaveBeenCalledWith('events.facebook', facebookEvent, 'test-corr-id');
  });

  it('should increment failedCounter on no source', async () => {
    const event = {
      eventId: 'unknown-1',
      timestamp: new Date().toISOString(),
      source: undefined,
      funnelStage: 'top',
      eventType: 'something',
      data: {},
    };

    await service.handleEvents([event as any], 'corr-id-x');

    expect(failedCounter.inc).toHaveBeenCalledTimes(1);
    expect(processedCounter.inc).not.toHaveBeenCalled();
  });

  it('should handle multiple valid events from different sources', async () => {
    const facebookEvent: FacebookEvent = {
      eventId: 'fb-2',
      timestamp: new Date().toISOString(),
      source: 'facebook',
      funnelStage: 'top',
      eventType: 'comment',
      data: {
        user: {
          userId: 'user-2',
          name: 'Jane Smith',
          age: 25,
          gender: 'female',
          location: {
            city: 'Lviv',
            country: 'UA',
          },
        },
        engagement: {
          referrer: 'newsfeed',
          videoId: 'vid-456',
          actionTime: new Date().toISOString(),
        },
      },
    };

    const tiktokEvent: TiktokEvent = {
      eventId: 'tt-2',
      timestamp: new Date().toISOString(),
      source: 'tiktok',
      funnelStage: 'bottom',
      eventType: 'like',
      data: {
        user: {
          userId: 'u2',
          username: 'bob',
          followers: 200,
        },
        engagement: {
          watchTime: 15,
          percentageWatched: 100,
          device: 'Android',
          country: 'CA',
          videoId: '231'
        },
      },
    };

    await service.handleEvents([facebookEvent, tiktokEvent], 'corr-id-2');

    expect(acceptedCounter.inc).toHaveBeenCalledWith(2);
    expect(acceptedCounter.inc).toHaveBeenCalledTimes(1);
    expect(processedCounter.inc).toHaveBeenCalledTimes(2);
    expect(failedCounter.inc).not.toHaveBeenCalled();
    expect(natsService.publish).toHaveBeenCalledWith('events.facebook', facebookEvent, 'corr-id-2');
    expect(natsService.publish).toHaveBeenCalledWith('events.tiktok', tiktokEvent, 'corr-id-2');
  });

});


import { Test, TestingModule } from '@nestjs/testing';
import { TtkCollectorService } from './ttk-collector.service';
import { TiktokRepository } from './tiktok.repository';
import { NatsService } from '@libs/nats';
import { Event } from '@libs/types';

describe('TtkCollectorService', () => {
  let service: TtkCollectorService;
  let repository: TiktokRepository;

  const acceptedInc = jest.fn();
  const processedInc = jest.fn();
  const failedInc = jest.fn();

  const mockRepository = {
    createUser: jest.fn(),
    createEvent: jest.fn(),
  };

  const validTiktokEvent: Event = {
    eventId: 'event456',
    source: 'tiktok',
    timestamp: new Date().toISOString(),
    funnelStage: 'top',
    eventType: 'video.view',
    data: {
      user: {
        userId: 'user42',
        username: 'Jane Doe',
        followers: 123
      },
      engagement: {
        watchTime: 123,
        percentageWatched: 11,
        device: "Android",
        country: 'USA',
        videoId: 'dad12',
      },
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TtkCollectorService,
        { provide: TiktokRepository, useValue: mockRepository },
        { provide: NatsService, useValue: { subscribe: jest.fn() } },
        { provide: 'PROM_METRIC_COLLECTORS_ACCEPTED_EVENTS_TOTAL', useValue: { inc: acceptedInc } },
        { provide: 'PROM_METRIC_COLLECTORS_PROCESSED_EVENTS_TOTAL', useValue: { inc: processedInc } },
        { provide: 'PROM_METRIC_COLLECTORS_FAILED_EVENTS_TOTAL', useValue: { inc: failedInc } },
      ],
    }).compile();

    service = module.get<TtkCollectorService>(TtkCollectorService);
    repository = module.get<TiktokRepository>(TiktokRepository);
  });

  it('should handle a valid Tiktok event', async () => {
    await service['handleTiktokEvent'](validTiktokEvent, 'cid-101');

    expect(acceptedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
    expect(mockRepository.createUser).toHaveBeenCalledWith(validTiktokEvent.data.user);
    expect(mockRepository.createEvent).toHaveBeenCalledWith(validTiktokEvent);
    expect(processedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
    expect(failedInc).not.toHaveBeenCalled();
  });

  it('should throw if event source is invalid', async () => {
    const invalidEvent = { ...validTiktokEvent, source: 'facebook' } as any;

    await expect(
      service['handleTiktokEvent'](invalidEvent, 'cid-102'),
    ).rejects.toThrow('Invalid event source, expected TikTok');

    expect(acceptedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
    expect(mockRepository.createUser).not.toHaveBeenCalled();
    expect(mockRepository.createEvent).not.toHaveBeenCalled();
    expect(processedInc).not.toHaveBeenCalled();
    expect(failedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
  });

  it('should handle repository error gracefully', async () => {
    mockRepository.createUser.mockImplementationOnce(() => {
      throw new Error('DB Failure');
    });

    await expect(
      service['handleTiktokEvent'](validTiktokEvent, 'cid-103'),
    ).rejects.toThrow('DB Failure');

    expect(acceptedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
    expect(mockRepository.createUser).toHaveBeenCalled();
    expect(mockRepository.createEvent).not.toHaveBeenCalled();
    expect(processedInc).not.toHaveBeenCalled();
    expect(failedInc).toHaveBeenCalledWith({ platform: 'tiktok' });
  });
});

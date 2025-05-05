import { Test, TestingModule } from '@nestjs/testing';
import { NatsService } from './nats.service';
import { ConfigService } from '@nestjs/config';
import { connect, JetStreamClient, JetStreamManager, StringCodec } from 'nats';
import { Event } from '@libs/types';

jest.mock('nats', () => {
  const actual = jest.requireActual('nats');
  return {
    ...actual,
    connect: jest.fn(),
    StringCodec: () => ({
      encode: jest.fn((data) => Buffer.from(data)),
      decode: jest.fn((data) => data.toString()),
    }),
  };
});

describe('NatsService', () => {
  let service: NatsService;
  let configService: ConfigService;

  const mockJetStream = {
    publish: jest.fn(),
    subscribe: jest.fn(),
    consumers: {
      get: jest.fn().mockResolvedValue({
        consume: jest.fn().mockResolvedValue({
          [Symbol.asyncIterator]: function* () {
            yield { data: Buffer.from(JSON.stringify({ type: 'TestEvent', payload: {} })), ack: jest.fn() };
          },
        }),
      }),
    },
  };

  const mockJetStreamManager = {
    streams: {
      info: jest.fn(),
    },
    consumers: {
      add: jest.fn().mockResolvedValue({}),
    },
  };

  const mockNatsConnection = {
    jetstream: jest.fn().mockReturnValue(mockJetStream),
    jetstreamManager: jest.fn().mockResolvedValue(mockJetStreamManager),
    drain: jest.fn(),
  };

  beforeEach(async () => {
    (connect as jest.Mock).mockResolvedValue(mockNatsConnection);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NatsService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('nats://localhost:4222'),
          },
        },
      ],
    }).compile();

    service = module.get<NatsService>(NatsService);
    configService = module.get<ConfigService>(ConfigService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect to NATS in onModuleInit', async () => {
    await service.onModuleInit();
    expect(connect).toHaveBeenCalledWith({
      servers: 'nats://localhost:4222',
    });
    expect(mockNatsConnection.jetstream).toHaveBeenCalled();
    expect(mockNatsConnection.jetstreamManager).toHaveBeenCalled();
  });

  it('should publish a message', async () => {
    await service.onModuleInit();
    const data: Event = {
      eventId: 'event456',
      source: 'tiktok',
      timestamp: new Date().toISOString(),
      funnelStage: 'top',
      eventType: 'video.view',
      data: {
        user: {
          userId: 'user42',
          username: 'Jane Doe',
          followers: 123,
        },
        engagement: {
          watchTime: 123,
          percentageWatched: 11,
          device: 'Android',
          country: 'USA',
          videoId: 'dad12',
        },
      },
    };
    await service.publish('test.subject', data, 'correlation-id-123');
    expect(mockJetStream.publish).toHaveBeenCalled();
    const callArgs = mockJetStream.publish.mock.calls[0];
    expect(callArgs[0]).toBe('test.subject');
    expect(callArgs[2].headers.get('x-correlation-id')).toBe('correlation-id-123');
  });


});

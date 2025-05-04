import { Test, TestingModule } from '@nestjs/testing';
import { TiktokRepository } from './tiktok.repository';
import { PrismaService } from '@libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';

describe('TiktokRepository', () => {
  let repository: TiktokRepository;
  let prisma: PrismaService;

  const mockPrisma = {
    tiktokUser: {
      upsert: jest.fn(),
    },
    tiktokEvent: {
      upsert: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TiktokRepository,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    repository = module.get<TiktokRepository>(TiktokRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should upsert a Tiktok user', async () => {
    const user = {
      userId: 'user123',
      username: 'tiktok_user',
      followers: 1000,
    };

    await repository.createUser(user);

    expect(prisma.tiktokUser.upsert).toHaveBeenCalledWith({
      where: { userId: 'user123' },
      update: {
        username: 'tiktok_user',
        followers: 1000,
      },
      create: {
        userId: 'user123',
        username: 'tiktok_user',
        followers: 1000,
      },
    });
  });

  it('should upsert a top-funnel Tiktok event', async () => {
    const event = {
      eventId: 'evt123',
      timestamp: new Date().toISOString(),
      funnelStage: 'top',
      eventType: 'view',
      data: {
        user: { userId: 'user123' },
        engagement: {
          watchTime: 30,
          percentageWatched: 85,
          device: 'mobile',
          country: 'US',
          videoId: 'vid001',
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.tiktokEvent.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { eventId: 'evt123' },
        create: expect.objectContaining({
          funnelStage: 'top',
          engagementTop: {
            create: {
              watchTime: 30,
              percentageWatched: 85,
              device: 'mobile',
              country: 'US',
              videoId: 'vid001',
            },
          },
        }),
      })
    );
  });

  it('should upsert a bottom-funnel Tiktok event with purchaseAmount', async () => {
    const event = {
      eventId: 'evt456',
      timestamp: new Date().toISOString(),
      funnelStage: 'bottom',
      eventType: 'purchase',
      data: {
        user: { userId: 'user456' },
        engagement: {
          actionTime: new Date().toISOString(),
          profileId: 'profile123',
          purchasedItem: 'itemABC',
          purchaseAmount: 99.95,
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.tiktokEvent.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        create: expect.objectContaining({
          funnelStage: 'bottom',
          engagementBottom: {
            create: expect.objectContaining({
              actionTime: expect.any(Date),
              profileId: 'profile123',
              purchasedItem: 'itemABC',
              purchaseAmount: new Decimal(99.95).toDecimalPlaces(2),
            }),
          },
        }),
      })
    );
  });

  it('should set purchaseAmount to null if not provided', async () => {
    const event = {
      eventId: 'evt789',
      timestamp: new Date().toISOString(),
      funnelStage: 'bottom',
      eventType: 'purchase',
      data: {
        user: { userId: 'user789' },
        engagement: {
          actionTime: new Date().toISOString(),
          profileId: 'profile999',
          purchasedItem: 'itemXYZ',
          purchaseAmount: null,
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.tiktokEvent.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        create: expect.objectContaining({
          engagementBottom: {
            create: expect.objectContaining({
              purchaseAmount: null,
            }),
          },
        }),
      })
    );
  });
});

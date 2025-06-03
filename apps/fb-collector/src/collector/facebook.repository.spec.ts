import { Test, TestingModule } from '@nestjs/testing';
import { FacebookRepository } from './facebook.repository';
import { PrismaService } from '@libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';

describe('FacebookRepository', () => {
  let repository: FacebookRepository;
  let prisma: PrismaService;

  const mockPrisma = {
    facebookUser: {
      upsert: jest.fn(),
    },
    facebookEvent: {
      upsert: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FacebookRepository,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    repository = module.get<FacebookRepository>(FacebookRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should upsert a Facebook user', async () => {
    const user = {
      userId: 'user1',
      name: 'Alice',
      age: 25,
      gender: 'female' as 'female',
      location: {
        country: 'USA',
        city: 'New York',
      },
    };

    await repository.createUser(user);

    expect(prisma.facebookUser.upsert).toHaveBeenCalledWith({
      where: { userId: 'user1' },
      update: {},
      create: {
        userId: 'user1',
        name: 'Alice',
        age: 25,
        gender: 'female',
        country: 'USA',
        city: 'New York',
      },
    });
  });

  it('should upsert a top-funnel Facebook event', async () => {
    const event = {
      eventId: 'evt1',
      timestamp: new Date().toISOString(),
      funnelStage: 'top',
      eventType: 'view',
      data: {
        user: { userId: 'user1' },
        engagement: {
          actionTime: new Date().toISOString(),
          referrer: 'google.com',
          videoId: 'vid123',
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.facebookEvent.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { eventId: 'evt1' },
        create: expect.objectContaining({
          funnelStage: 'top',
          engagementTop: {
            create: {
              actionTime: expect.any(Date),
              referrer: 'google.com',
              videoId: 'vid123',
            },
          },
        }),
      })
    );
  });

  it('should upsert a bottom-funnel Facebook event with purchase amount', async () => {
    const event = {
      eventId: 'evt2',
      timestamp: new Date().toISOString(),
      funnelStage: 'bottom',
      eventType: 'purchase',
      data: {
        user: { userId: 'user1' },
        engagement: {
          adId: 'ad1',
          campaignId: 'camp1',
          clickPosition: 'top',
          device: 'mobile',
          browser: 'Chrome',
          purchaseAmount: 49.99,
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.facebookEvent.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        create: expect.objectContaining({
          engagementBottom: {
            create: expect.objectContaining({
              adId: 'ad1',
              campaignId: 'camp1',
              clickPosition: 'top',
              device: 'mobile',
              browser: 'Chrome',
              purchaseAmount: new Decimal(49.99).toDecimalPlaces(2),
            }),
          },
        }),
      })
    );
  });

  it('should set purchaseAmount to null if not provided', async () => {
    const event = {
      eventId: 'evt3',
      timestamp: new Date().toISOString(),
      funnelStage: 'bottom',
      eventType: 'purchase',
      data: {
        user: { userId: 'user2' },
        engagement: {
          adId: 'ad2',
          campaignId: 'camp2',
          clickPosition: 'bottom',
          device: 'desktop',
          browser: 'Firefox',
          purchaseAmount: null,
        },
      },
    };

    await repository.createEvent(event as any);

    expect(prisma.facebookEvent.upsert).toHaveBeenCalledWith(
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

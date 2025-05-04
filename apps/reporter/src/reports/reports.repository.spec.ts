import { Test, TestingModule } from '@nestjs/testing';
import { ReportsRepository } from './reports.repository';
import { PrismaService } from '@libs/prisma';
import { Decimal } from "@prisma/client/runtime/library";

describe('ReportsRepository', () => {
  let repository: ReportsRepository;
  let prisma: PrismaService;

  const mockPrisma = {
    facebookEvent: {
      groupBy: jest.fn(),
    },
    tiktokEvent: {
      groupBy: jest.fn(),
    },
    facebookEngagementBottom: {
      aggregate: jest.fn(),
    },
    tiktokEngagementBottom: {
      aggregate: jest.fn(),
    },
    facebookUser: {
      findMany: jest.fn(),
    },
    tiktokUser: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsRepository,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    repository = module.get<ReportsRepository>(ReportsRepository);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  it('should get Facebook event stats', async () => {
    const data = [
      { eventType: 'click', _count: { _all: 5 } },
      { eventType: 'purchase', _count: { _all: 2 } },
    ];
    mockPrisma.facebookEvent.groupBy.mockResolvedValue(data);

    const result = await repository.getEventStatsFromFacebook({});
    expect(result).toEqual([
      { eventType: 'click', count: 5 },
      { eventType: 'purchase', count: 2 },
    ]);
    expect(mockPrisma.facebookEvent.groupBy).toHaveBeenCalled();
  });

  it('should get TikTok event stats', async () => {
    const data = [{ eventType: 'view', _count: { _all: 10 } }];
    mockPrisma.tiktokEvent.groupBy.mockResolvedValue(data);

    const result = await repository.getEventStatsFromTiktok({});
    expect(result).toEqual([{ eventType: 'view', count: 10 }]);
  });

  it('should get Facebook revenue', async () => {
    mockPrisma.facebookEngagementBottom.aggregate.mockResolvedValue({
      _sum: { purchaseAmount: new Decimal(123.45) },
    });

    const result = await repository.getRevenueDataFromFacebook({
      timestamp: { gte: new Date() },
    });

    expect(result).toEqual({ purchaseAmount: 123.45 });
  });

  it('should get TikTok revenue', async () => {
    mockPrisma.tiktokEngagementBottom.aggregate.mockResolvedValue({
      _sum: { purchaseAmount: null },
    });

    const result = await repository.getRevenueDataFromTiktok({
      timestamp: { gte: new Date() },
    });

    expect(result).toEqual({ purchaseAmount: 0 });
  });

  it('should get Facebook demographics', async () => {
    const mockUsers = [
      {
        userId: 'u1',
        age: 25,
        gender: 'male',
        country: 'Ukraine',
        city: 'Kyiv',
      },
    ];
    mockPrisma.facebookUser.findMany.mockResolvedValue(mockUsers);

    const result = await repository.getDemographicsFromFacebook({
      timestamp: { gte: new Date() },
    });

    expect(result).toEqual(mockUsers);
  });

  it('should get TikTok demographics', async () => {
    const mockUsers = [
      {
        userId: 'u2',
        username: 'tiktok_user',
        followers: 1000,
      },
    ];
    mockPrisma.tiktokUser.findMany.mockResolvedValue(mockUsers);

    const result = await repository.getDemographicsFromTiktok({
      timestamp: { gte: new Date() },
    });

    expect(result).toEqual(mockUsers);
  });
});

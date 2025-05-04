import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { ReportsRepository } from './reports.repository';
import { FacebookDemographicsDto, TiktokDemographicsDto } from './dto/demographics-result.dto';
import { EventStatsResultDto } from './dto/event-stats-result.dto';
import { RevenueResultDto } from './dto/revenue-result.dto';

describe('ReportsService', () => {
  let service: ReportsService;
  let repository: ReportsRepository;

  const mockEnd = jest.fn();
  const mockLatencyHistogram = {
    startTimer: jest.fn(() => mockEnd),
  };

  const mockRepository = {
    getEventStatsFromFacebook: jest.fn(),
    getEventStatsFromTiktok: jest.fn(),
    getRevenueDataFromFacebook: jest.fn(),
    getRevenueDataFromTiktok: jest.fn(),
    getDemographicsFromFacebook: jest.fn(),
    getDemographicsFromTiktok: jest.fn(),
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: ReportsRepository, useValue: mockRepository },
        { provide: 'PROM_METRIC_REPORTER_LATENCY_SECONDS', useValue: mockLatencyHistogram },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });


  it('should return Facebook event stats', async () => {
    const mockResult: EventStatsResultDto[] = [{ eventType: 'click', count: 10 }];
    mockRepository.getEventStatsFromFacebook.mockResolvedValue(mockResult);

    const result = await service.getEventStats({
      source: 'facebook',
      from: new Date(),
      to: new Date(),
      funnelStage: 'top',
      eventType: 'click',
    });

    expect(result).toEqual(mockResult);
    expect(mockRepository.getEventStatsFromFacebook).toHaveBeenCalled();
    expect(mockEnd).toHaveBeenCalled();
  });

  it('should return TikTok revenue data', async () => {
    const mockResult: RevenueResultDto = { purchaseAmount: 123.45 };
    mockRepository.getRevenueDataFromTiktok.mockResolvedValue(mockResult);

    const result = await service.getRevenueData({
      source: 'tiktok',
      from: new Date(),
      to: new Date(),
      campaignId: 'cmp-123',
    });

    expect(result).toEqual(mockResult);
    expect(mockRepository.getRevenueDataFromTiktok).toHaveBeenCalled();
    expect(mockEnd).toHaveBeenCalled();
  });

  it('should return Facebook demographics', async () => {
    const mockResult: FacebookDemographicsDto[] = [
      { userId: 'u1', age: 30, gender: 'male', country: 'UA', city: 'Kyiv' },
    ];
    mockRepository.getDemographicsFromFacebook.mockResolvedValue(mockResult);

    const result = await service.getDemographics({
      source: 'facebook',
      from: new Date(),
      to: new Date(),
    });

    expect(result).toEqual(mockResult);
    expect(mockRepository.getDemographicsFromFacebook).toHaveBeenCalled();
    expect(mockEnd).toHaveBeenCalled();
  });

  it('should throw for unsupported source in getEventStats', async () => {
    await expect(
      service.getEventStats({
        source: 'unknown' as any,
        from: new Date(),
        to: new Date(),
      }),
    ).rejects.toThrow('Unsupported source');

    expect(mockEnd).toHaveBeenCalled();
  });

  it('should throw for unsupported source in getRevenueData', async () => {
    await expect(
      service.getRevenueData({
        source: 'invalid' as any,
        from: new Date(),
        to: new Date(),
      }),
    ).rejects.toThrow('Unsupported source');

    expect(mockEnd).toHaveBeenCalled();
  });

  it('should throw for unsupported source in getDemographics', async () => {
    await expect(
      service.getDemographics({
        source: 'none' as any,
        from: new Date(),
        to: new Date(),
      }),
    ).rejects.toThrow('Unsupported source');

    expect(mockEnd).toHaveBeenCalled();
  });
});

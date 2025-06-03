import { Test, TestingModule } from "@nestjs/testing";
import { FbCollectorService } from "./fb-collector.service";
import { FacebookRepository } from "./facebook.repository";
import { NatsService } from "@libs/nats";
import { Event, FacebookEvent } from "@libs/types";

describe("FbCollectorService", () => {
  let service: FbCollectorService;
  let repository: FacebookRepository;

  const acceptedInc = jest.fn();
  const processedInc = jest.fn();
  const failedInc = jest.fn();

  const mockRepository = {
    createUser: jest.fn(),
    createEvent: jest.fn(),
  };

  const validFacebookEvent: FacebookEvent = {
    eventId: "event123",
    source: "facebook",
    timestamp: new Date().toISOString(),
    funnelStage: "top",
    eventType: "video.view",
    data: {
      user: {
        userId: "user1",
        name: "John Doe",
        age: 30,
        gender: "male",
        location: {
          country: "USA",
          city: "New York",
        },
      },
      engagement: {
        actionTime: new Date().toISOString(),
        referrer: "newsfeed",
        videoId: "vid123",
      },
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FbCollectorService,
        { provide: FacebookRepository, useValue: mockRepository },
        { provide: NatsService, useValue: { subscribe: jest.fn() } },
        {
          provide: "PROM_METRIC_COLLECTORS_ACCEPTED_EVENTS_TOTAL",
          useValue: { inc: acceptedInc },
        },
        {
          provide: "PROM_METRIC_COLLECTORS_PROCESSED_EVENTS_TOTAL",
          useValue: { inc: processedInc },
        },
        {
          provide: "PROM_METRIC_COLLECTORS_FAILED_EVENTS_TOTAL",
          useValue: { inc: failedInc },
        },
      ],
    }).compile();

    service = module.get<FbCollectorService>(FbCollectorService);
    repository = module.get<FacebookRepository>(FacebookRepository);
  });

  it("should handle a valid Facebook event", async () => {
    await service["handleFacebookEvent"](validFacebookEvent, "cid-123");

    expect(acceptedInc).toHaveBeenCalledWith({ platform: "facebook" });
    expect(mockRepository.createUser).toHaveBeenCalledWith(
      validFacebookEvent.data.user,
    );
    expect(mockRepository.createEvent).toHaveBeenCalledWith(validFacebookEvent);
    expect(processedInc).toHaveBeenCalledWith({ platform: "facebook" });
    expect(failedInc).not.toHaveBeenCalled();
  });

  it("should throw if event source is invalid", async () => {
    const invalidEvent = { ...validFacebookEvent, source: "tiktok" } as any;

    await expect(
      service["handleFacebookEvent"](invalidEvent, "cid-456"),
    ).rejects.toThrow("Invalid event source, expected Facebook");

    expect(acceptedInc).toHaveBeenCalledWith({ platform: "facebook" });
    expect(mockRepository.createUser).not.toHaveBeenCalled();
    expect(mockRepository.createEvent).not.toHaveBeenCalled();
    expect(processedInc).not.toHaveBeenCalled();
    expect(failedInc).toHaveBeenCalledWith({ platform: "facebook" });
  });

  it("should handle repository error gracefully", async () => {
    mockRepository.createUser.mockImplementationOnce(() => {
      throw new Error("DB Error");
    });

    await expect(
      service["handleFacebookEvent"](validFacebookEvent, "cid-789"),
    ).rejects.toThrow("DB Error");

    expect(acceptedInc).toHaveBeenCalledWith({ platform: "facebook" });
    expect(mockRepository.createUser).toHaveBeenCalled();
    expect(mockRepository.createEvent).not.toHaveBeenCalled();
    expect(processedInc).not.toHaveBeenCalled();
    expect(failedInc).toHaveBeenCalledWith({ platform: "facebook" });
  });

  it("should fail validation for an invalid Facebook event", async () => {
    const invalidEvent: Event = {
      ...validFacebookEvent,
      data: {
        ...validFacebookEvent.data,
        engagement: {
          ...validFacebookEvent.data.engagement,
          referrer: "undefined" as any,
        },
      },
    };

    await service["handleFacebookEvent"](invalidEvent, "cid-104");

    expect(acceptedInc).toHaveBeenCalledWith({ platform: "facebook" });
    expect(mockRepository.createUser).not.toHaveBeenCalled();
    expect(mockRepository.createEvent).not.toHaveBeenCalled();
    expect(processedInc).not.toHaveBeenCalled();
    expect(failedInc).toHaveBeenCalledWith({ platform: "facebook" });
  });
});

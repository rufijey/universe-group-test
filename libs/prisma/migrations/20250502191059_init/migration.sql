-- CreateTable
CREATE TABLE "FacebookUser" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "FacebookUser_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "FacebookEvent" (
    "eventId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "funnelStage" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FacebookEvent_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "FacebookEngagementTop" (
    "facebookEventId" TEXT NOT NULL,
    "actionTime" TIMESTAMP(3) NOT NULL,
    "referrer" TEXT NOT NULL,
    "videoId" TEXT,

    CONSTRAINT "FacebookEngagementTop_pkey" PRIMARY KEY ("facebookEventId")
);

-- CreateTable
CREATE TABLE "FacebookEngagementBottom" (
    "facebookEventId" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "clickPosition" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "purchaseAmount" TEXT,

    CONSTRAINT "FacebookEngagementBottom_pkey" PRIMARY KEY ("facebookEventId")
);

-- CreateTable
CREATE TABLE "TiktokUser" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,

    CONSTRAINT "TiktokUser_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "TiktokEvent" (
    "eventId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "funnelStage" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TiktokEvent_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "TiktokEngagementTop" (
    "tiktokEventId" TEXT NOT NULL,
    "watchTime" INTEGER NOT NULL,
    "percentageWatched" INTEGER NOT NULL,
    "device" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "TiktokEngagementTop_pkey" PRIMARY KEY ("tiktokEventId")
);

-- CreateTable
CREATE TABLE "TiktokEngagementBottom" (
    "tiktokEventId" TEXT NOT NULL,
    "actionTime" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT,
    "purchasedItem" TEXT,
    "purchaseAmount" TEXT,

    CONSTRAINT "TiktokEngagementBottom_pkey" PRIMARY KEY ("tiktokEventId")
);

-- AddForeignKey
ALTER TABLE "FacebookEvent" ADD CONSTRAINT "FacebookEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookEngagementTop" ADD CONSTRAINT "FacebookEngagementTop_facebookEventId_fkey" FOREIGN KEY ("facebookEventId") REFERENCES "FacebookEvent"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookEngagementBottom" ADD CONSTRAINT "FacebookEngagementBottom_facebookEventId_fkey" FOREIGN KEY ("facebookEventId") REFERENCES "FacebookEvent"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TiktokEvent" ADD CONSTRAINT "TiktokEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TiktokUser"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TiktokEngagementTop" ADD CONSTRAINT "TiktokEngagementTop_tiktokEventId_fkey" FOREIGN KEY ("tiktokEventId") REFERENCES "TiktokEvent"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TiktokEngagementBottom" ADD CONSTRAINT "TiktokEngagementBottom_tiktokEventId_fkey" FOREIGN KEY ("tiktokEventId") REFERENCES "TiktokEvent"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

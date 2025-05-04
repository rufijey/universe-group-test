/*
  Warnings:

  - You are about to alter the column `purchaseAmount` on the `FacebookEngagementBottom` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `purchaseAmount` on the `TiktokEngagementBottom` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "FacebookEngagementBottom" ALTER COLUMN "purchaseAmount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "TiktokEngagementBottom" ALTER COLUMN "purchaseAmount" SET DATA TYPE DECIMAL(10,2);

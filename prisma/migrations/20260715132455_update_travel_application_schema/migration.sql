/*
  Warnings:

  - You are about to drop the column `currentAddress` on the `travel_applications` table. All the data in the column will be lost.
  - Added the required column `motherMaidenName` to the `travel_applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `travel_applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "travel_applications" DROP COLUMN "currentAddress",
ADD COLUMN     "motherMaidenName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `role` on the `waitlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "waitlist" DROP COLUMN "role";

-- DropEnum
DROP TYPE "Role";

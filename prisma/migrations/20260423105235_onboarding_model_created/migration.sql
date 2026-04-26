-- CreateEnum
CREATE TYPE "OnboardingRole" AS ENUM ('student', 'self_taught', 'junior', 'freelancer', 'career_switcher');

-- CreateEnum
CREATE TYPE "OnboardingInterest" AS ENUM ('frontend', 'backend', 'fullstack', 'ai', 'freelancing');

-- CreateEnum
CREATE TYPE "OnboardingTimeCommitment" AS ENUM ('less_than_5', 'five_to_ten', 'ten_to_twenty', 'more_than_20');

-- CreateTable
CREATE TABLE "Onboarding" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "OnboardingRole" NOT NULL,
    "interest" "OnboardingInterest" NOT NULL,
    "timeCommitment" "OnboardingTimeCommitment" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Onboarding_userId_key" ON "Onboarding"("userId");

-- AddForeignKey
ALTER TABLE "Onboarding" ADD CONSTRAINT "Onboarding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

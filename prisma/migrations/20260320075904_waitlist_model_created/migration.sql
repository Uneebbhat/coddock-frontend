-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'SELF_TAUGHT', 'JUNIOR', 'FREELANCER', 'CAREER_SWITCHER', 'OTHER');

-- CreateTable
CREATE TABLE "waitlist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_email_key" ON "waitlist"("email");

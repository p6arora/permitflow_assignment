/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "PermitResult" (
    "permitId" SERIAL NOT NULL,
    "processNeeded" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "steps" TEXT[],

    CONSTRAINT "PermitResult_pkey" PRIMARY KEY ("permitId")
);

-- CreateIndex
CREATE INDEX "PermitResult_createdAt_idx" ON "PermitResult"("createdAt");

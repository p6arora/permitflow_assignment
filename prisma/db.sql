-- CreateTable
CREATE TABLE "PermitResult" (
    "permitId" SERIAL NOT NULL,
    "processNeeded" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "steps" TEXT[],

    CONSTRAINT "PermitResult_pkey" PRIMARY KEY ("permitId")
);

-- CreateTable
CREATE TABLE "SavingsProfile" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'KES',
    "dailyGoal" INTEGER,
    "monthlyGoal" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavingsProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingsLog" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "note" TEXT,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavingsLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailySavings" (
    "date" TIMESTAMP(3) NOT NULL,
    "netAmount" INTEGER NOT NULL,
    "entriesCount" INTEGER NOT NULL,
    "isSavingDay" BOOLEAN NOT NULL,
    "hasActivity" BOOLEAN NOT NULL,
    "streakIndex" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailySavings_pkey" PRIMARY KEY ("date")
);

-- CreateTable
CREATE TABLE "MonthlySavings" (
    "month" TIMESTAMP(3) NOT NULL,
    "totalNetAmount" INTEGER NOT NULL,

    CONSTRAINT "MonthlySavings_pkey" PRIMARY KEY ("month")
);

-- CreateIndex
CREATE INDEX "SavingsLog_occurredAt_idx" ON "SavingsLog"("occurredAt");

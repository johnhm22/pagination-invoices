-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'PAID', 'CANCELLED', 'UNCOLLECTABLE');

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

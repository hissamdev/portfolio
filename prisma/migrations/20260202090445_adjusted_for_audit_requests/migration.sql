/*
  Warnings:

  - You are about to drop the `auth` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "username" DROP NOT NULL;

-- DropTable
DROP TABLE "auth";

-- CreateTable
CREATE TABLE "confirm_email" (
    "id" SERIAL NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3),
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "confirm_email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_requests" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "message" TEXT,
    "verifiedEmail" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "confirm_email_token_key" ON "confirm_email"("token");

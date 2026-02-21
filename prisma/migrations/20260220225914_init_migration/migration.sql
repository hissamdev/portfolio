/*
  Warnings:

  - You are about to drop the `confirm_email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "confirm_email";

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "tags" JSONB NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

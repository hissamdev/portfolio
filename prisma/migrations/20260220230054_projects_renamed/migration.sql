/*
  Warnings:

  - You are about to drop the `Projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Projects";

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "tags" JSONB NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

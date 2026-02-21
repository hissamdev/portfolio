/*
  Warnings:

  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tagsId` on the `tags` table. All the data in the column will be lost.
  - The required column `id` was added to the `tags` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToTag" DROP CONSTRAINT "_ProjectToTag_B_fkey";

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
DROP COLUMN "tagsId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "_ProjectToTag" ADD CONSTRAINT "_ProjectToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

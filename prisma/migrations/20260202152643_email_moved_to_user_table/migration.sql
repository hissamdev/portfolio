/*
  Warnings:

  - You are about to drop the column `email` on the `audit_requests` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedEmail` on the `audit_requests` table. All the data in the column will be lost.
  - Added the required column `userId` to the `audit_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "audit_requests" DROP COLUMN "email",
DROP COLUMN "verifiedEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "verifiedEmail" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "audit_requests" ADD CONSTRAINT "audit_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

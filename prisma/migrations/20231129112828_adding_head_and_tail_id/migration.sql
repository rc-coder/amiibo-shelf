/*
  Warnings:

  - Added the required column `head` to the `Amiibo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tail` to the `Amiibo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Amiibo" ADD COLUMN     "head" TEXT NOT NULL,
ADD COLUMN     "tail" TEXT NOT NULL;

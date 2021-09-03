/*
  Warnings:

  - Added the required column `letter` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "letter" TEXT NOT NULL;

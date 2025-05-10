/*
  Warnings:

  - You are about to drop the column `passward` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `passward`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

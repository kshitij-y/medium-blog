-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "dislikes" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "likes" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "saves" TEXT NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "saved" TEXT[];

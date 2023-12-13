-- CreateTable
CREATE TABLE "Amiibo" (
    "id" SERIAL NOT NULL,
    "amiiboSeries" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "gameSeries" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Amiibo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Amiibo" ADD CONSTRAINT "Amiibo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

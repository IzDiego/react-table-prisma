-- CreateTable
CREATE TABLE `Cancion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `artista` VARCHAR(255) NOT NULL,
    `year` INTEGER NOT NULL,
    `genero` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

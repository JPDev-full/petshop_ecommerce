-- CreateTable
CREATE TABLE `Clients` (
    `id_clients` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clients_cpf_key`(`cpf`),
    UNIQUE INDEX `Clients_email_key`(`email`),
    PRIMARY KEY (`id_clients`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `quantidade_estoque` INTEGER NOT NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venda` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `data_venda` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total` DOUBLE NOT NULL,

    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

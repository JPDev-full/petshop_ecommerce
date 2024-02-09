// dendex.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      provider: 'mysql',
      url: 'mysql://usuario:senha@localhost:3306/nome_do_banco_de_dados'
    }
  }
});

export default prisma;

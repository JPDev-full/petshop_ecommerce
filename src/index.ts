import express, { Application } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/routes';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT!) || 3000;
const prisma = new PrismaClient();

app.use(express.json());
routes(app); 

async function synchronizeDatabase() {
  try {
    await prisma.$connect();
    await prisma.$executeRaw`SELECT 1+1`;

    console.log('Database synchronization successful.');
  } catch (error) {
    console.error('Error during database synchronization:', error);
    process.exit(1);
  }
}

synchronizeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/api/`);
    });
  })
  .catch(error => {
    console.error('Failed to start server:', error);
  });

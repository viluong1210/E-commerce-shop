import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  experimentalFeatures: true,
} as any);

export default prisma;

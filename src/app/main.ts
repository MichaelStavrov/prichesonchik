import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
// Example query to create a user based on the example schema

export async function createUser(name: string, phone: string) {
  const user = await prisma.user.create({
    data: {
      name,
      phone,
    },
  });

  return user;
}

export const getUser = async () => {
  const user = await prisma.user.findMany();

  return user;
};

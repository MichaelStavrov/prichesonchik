// import 'dotenv/config';
// import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '../../generated/prisma/client';

// const connectionString =
//   'postgres://04780878e40963b2c42a5588d17390edbb94b6206f766e2fa7e33bf1834519e2:sk_DYFN-cXNIWEP8ojcivIDD@db.prisma.io:5432/postgres?sslmode=require';

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export { prisma };
// // Example query to create a user based on the example schema

// export async function createUser(name: string, phone: string) {
//   const user = await prisma.user.create({
//     data: {
//       name,
//       phone,
//     },
//   });

//   return user;
// }

// export const getUser = async () => {
//   const user = await prisma.user.findMany();

//   return user;
// };

export {};

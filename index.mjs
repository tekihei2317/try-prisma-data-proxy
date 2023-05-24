import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const flowers = await prisma.flower.findMany();
  console.log({ flowers });
}

main();

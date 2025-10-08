import { PrismaClient } from "prisma/client/";
const prisma = new PrismaClient();

export function seed() {}

if (import.meta.main) {
    seed();
}

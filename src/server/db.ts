import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { env } from "~/env";
import { PrismaClient } from "./../../generated/prisma/client";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient;
};

const pool = new Pool({
	connectionString: env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const db = globalForPrisma.prisma || new PrismaClient({ adapter });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

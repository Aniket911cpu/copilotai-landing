import { PrismaClient } from "@prisma/client";

/**
 * OPTIONAL: Prisma Client for PostgreSQL.
 * Note: Firebase Firestore is the primary database for user profiles and sessions.
 * Use this only if a separate PostgreSQL DB is needed for advanced analytics.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

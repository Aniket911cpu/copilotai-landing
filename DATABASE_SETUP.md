# Database Integration Guide (Prisma + Supabase)

Follow these steps to set up the database for CopilotAI.

## 1. Provision a PostgreSQL Database
The easiest way is to use [Supabase](https://supabase.com/) (Free Tier).
- Create a new project.
- Copy the **Connection String** (Transaction mode, port 6543) from Project Settings > Database.

## 2. Environment Variables
Add the connection string to your `.env` file:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:6543/postgres?pgbouncer=true"
```

## 3. Initialize Prisma
Run the following commands to generate the client and push the schema to your database:
```bash
# Push schema to DB
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

## 4. Usage in Code
You can now use the Prisma client to interact with your data. Create a `lib/db.ts` file:
```typescript
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
```

## 5. View Your Data
Use Prisma Studio to view and edit your data in a GUI:
```bash
npx prisma studio
```

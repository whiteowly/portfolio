// src/lib/prisma.ts

import { PrismaClient } from "../generated/prisma/client";

// 1. Declare a global variable to store the PrismaClient instance.
// This is necessary to prevent multiple instances from being created 
// during development with tools like nodemon or Next.js hot reload.
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// 2. Instantiate the client or use the existing global instance.
// The ?? operator checks if globalForPrisma.prisma is null or undefined.
export const prisma = 
  globalForPrisma.prisma ?? new PrismaClient();

// 3. In development, save the instance globally.
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// 4. Export the single instance.
// Other files will import this 'prisma' object for all database operations.
// The type safety comes from the generated '../generated/prisma/client' package.
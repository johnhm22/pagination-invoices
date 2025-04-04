// // import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "@/generated/prisma";
// import { withAccelerate } from "@prisma/extension-accelerate";

// const globalForPrisma = global as unknown as { prisma: typeof prisma };

// const prisma =
// 	globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate());

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;

import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
export const prisma = new PrismaClient({ adapter });

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString =
      process.env.DATABASE_URL ||
      'postgresql://postgres:rootpassword@localhost:5432/nodeflow?schema=public';

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool as any);

    super({
      adapter,
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Connected to the database via Prisma');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

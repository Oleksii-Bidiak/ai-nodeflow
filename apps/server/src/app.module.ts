import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
})
export class AppModule {}

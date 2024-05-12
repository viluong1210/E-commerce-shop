import { Module } from '@nestjs/common';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategorysController],
  providers: [CategorysService, PrismaService],
})
export class CategorysModule {}

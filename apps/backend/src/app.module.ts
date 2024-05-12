import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { ProductsModule } from './services/products/products.module';
import { CategorysModule } from './services/category/categorys.module';
import { OrdersModule } from './services/order/orders.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    CategorysModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

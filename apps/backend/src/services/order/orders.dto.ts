import { OrderStatus } from '@prisma/client';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  // @IsString()
  // userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @IsNumber()
  @IsNotEmpty()
  cityId: number;

  @IsNumber()
  @IsNotEmpty()
  vnwardId: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsArray()
  orderItems: OrderItems[];
}

export class OrderItems {
  @IsNumber()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateOrderDto {
  @IsString()
  name?: string;

  @IsNumber()
  price?: number;

  @IsString()
  description?: string;

  images?: string[];

  @IsString()
  category?: string;
}

export class ChangeStatusDto {
  @IsString()
  @IsNotEmpty()
  status: OrderStatus;
}

export class DeleteOrderDto {
  @IsArray()
  ids: string[];
}

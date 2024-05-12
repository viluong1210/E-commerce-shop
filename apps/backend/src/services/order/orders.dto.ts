import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

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

export class DeleteOrderDto {
  @IsArray()
  ids: string[];
}

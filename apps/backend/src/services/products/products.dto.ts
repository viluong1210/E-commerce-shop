import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  description: string;

  @IsArray()
  images: string[];

  @IsString()
  @IsNotEmpty()
  category: string;
}

export class UpdateProductDto {
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

export class DeleteProductDto {
  @IsArray()
  ids: string[];
}

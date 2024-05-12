import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  passWord: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  sex: string;

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

  @IsString()
  @IsNotEmpty()
  birthday: string;
}

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsString()
  email?: string;

  @IsString()
  passWord?: string;

  @IsString()
  phone?: string;

  @IsString()
  sex?: string;

  @IsString()
  regionId?: number;

  @IsString()
  cityId?: number;

  @IsString()
  vnwardId?: number;

  @IsString()
  address?: string;

  @IsString()
  birthday?: string;
}

export class DeleteUserDto {
  @IsArray()
  ids: string[];
}

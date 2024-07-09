import { Sex } from '@prisma/client';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class InforMationUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  sex: Sex;

  @IsString()
  @IsNotEmpty()
  provinceId: string;

  @IsString()
  @IsNotEmpty()
  wardId: string;

  @IsString()
  @IsNotEmpty()
  districtId: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsDate()
  @IsNotEmpty()
  birthday: Date;
}
export class CreateUserDto extends InforMationUserDto {
  @IsString()
  @IsNotEmpty()
  passWord: string;
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
  provinceId?: number;

  @IsString()
  wardId?: number;

  @IsString()
  districtId?: number;

  @IsString()
  address?: string;

  @IsString()
  birthday?: string;
}

export class DeleteUserDto {
  @IsArray()
  ids: string[];
}

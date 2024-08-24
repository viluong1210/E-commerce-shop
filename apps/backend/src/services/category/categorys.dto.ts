import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategorysDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCategorysDto {
  @IsString()
  name?: string;
}

export class DeleteCategorysDto {
  @IsString()
  id: string;
}

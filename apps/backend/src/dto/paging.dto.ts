import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export type SortType = 'esc' | 'desc';
export class Paging {
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: 1;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  category?: number;

  @IsNumber()
  @IsOptional()
  @Max(50)
  limit?: 10;

  @IsString()
  @IsOptional()
  priceSort?: SortType;

  @IsString()
  @IsOptional()
  dateSort?: SortType;
}

export class PagingProduct extends Paging {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  category?: number;

  @IsString()
  @IsOptional()
  priceSort?: SortType;

  @IsString()
  @IsOptional()
  dateSort?: SortType;
}

export class RespondsType<T> {
  data: T[];
  page: number;
  count: number;
  limit: number;
}

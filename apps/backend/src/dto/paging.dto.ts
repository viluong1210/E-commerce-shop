import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

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
}

export class RespondsType<T> {
  data: T[];
  page: number;
  count: number;
  limit: number;
}

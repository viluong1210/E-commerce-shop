import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';

import { BaseService } from 'src/base.service';
import { Paging } from 'src/dto/paging.dto';
import { createPaging } from 'src/utils/Paging';

@Injectable()
export class ProductsService extends BaseService<Products> {
  protected model = 'products';
  constructor() {
    super();
  }

  async getAll(paging: Paging): Promise<any[]> {
    const { skip, take, where } = createPaging(paging);

    return this.prisma.products.findMany({
      where: where,
      skip,
      take,
      include: {
        images: true,
      },
    });
  }

  async getDetail(id: string) {
    return this.prisma.products.findFirst({
      where: {
        id,
      },
      include: {
        images: true,
      },
    });
  }
}

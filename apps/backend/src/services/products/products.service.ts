import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';

import { BaseService } from 'src/base.service';

@Injectable()
export class ProductsService extends BaseService<Products> {
  protected model = 'products';
  constructor() {
    super();
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

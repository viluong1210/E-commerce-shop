import { Injectable } from '@nestjs/common';
import { Categorys } from '@prisma/client';

import { BaseService } from 'src/base.service';

@Injectable()
export class CategorysService extends BaseService<Categorys> {
  protected model = 'categorys';
  constructor() {
    super();
  }
}

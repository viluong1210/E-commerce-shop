import { Injectable } from '@nestjs/common';
import { Orders } from '@prisma/client';

import { BaseService } from 'src/base.service';
import { Paging } from 'src/dto/paging.dto';
import { createPaging } from 'src/utils/Paging';

@Injectable()
export class OrdersService extends BaseService<Orders> {
  protected model = 'orders';
  constructor() {
    super();
  }

  // async getAll(paging: Paging): Promise<any[]> {
  //   const { skip, take, where } = createPaging(paging);

  //   return this.prisma.orders.findMany({
  //     where: where,
  //     skip,
  //     take,
  //     include: {
  //       orderItems: true,
  //       UserInformation: true,
  //     },
  //   });
  // }

  // async getDetail(id: string) {
  //   return this.prisma.orders.findFirst({
  //     where: {
  //       id,
  //       isDeleted: false,
  //     },
  //     include: {
  //       orderItems: true,
  //       UserInformation: true,
  //     },
  //   });
  // }
}

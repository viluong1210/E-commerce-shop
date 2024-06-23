import { Controller, Get, Param, Post, Put, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  ChangeStatusDto,
  CreateOrderDto,
  DeleteOrderDto,
  UpdateOrderDto,
} from './orders.dto';
import { Public } from 'src/contans';
import { ErrorException } from 'src/exceptions/error-exception';
import { Paging } from 'src/dto/paging.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('orders')
export class OrdersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly orderService: OrdersService,
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  @Public()
  async findAll(@Query() paging: Paging) {
    const res = await this.orderService.findAll(paging, {
      orderItems: true,
      UserInformation: true,
    });
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.orderService.findOne(id, {
      orderItems: true,
      UserInformation: true,
    });

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post()
  @Public()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const { orderItems, ...userInfo } = createOrderDto;

    const inforMation = await this.prisma.userInformation.create({
      data: userInfo,
    });

    if (!inforMation) throw new ErrorException('apibad gateway');

    const data = {
      userInformationId: inforMation.id,
    };

    const res = await this.orderService.create(data);

    if (res instanceof ErrorException) {
      throw res;
    }
    const orderItemsData = orderItems.map((i) => ({
      orderId: res.id,
      ...i,
    }));

    await this.prisma.orderItems
      .createMany({
        data: orderItemsData,
      })
      .catch(() => {
        this.orderService.delete([res.id]);
        throw res;
      });

    return res;
  }

  @Put(':id')
  @Public()
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    const res = await this.orderService.update(id, updateOrderDto);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post(':id')
  @Public()
  async changeOrderStatus(
    @Param('id') id: string,
    @Body() { status }: ChangeStatusDto,
  ) {
    const res = await this.orderService.update(id, {
      status: status,
    });

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post('/delete')
  async remove(@Body() { ids }: DeleteOrderDto) {
    const res = await this.orderService.delete(ids);
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }
}

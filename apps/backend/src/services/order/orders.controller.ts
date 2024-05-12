import { Controller, Get, Param, Post, Put, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, DeleteOrderDto, UpdateOrderDto } from './orders.dto';
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
    const res = await this.orderService.getAll(paging);
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.orderService.getDetail(id);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const { orderItems, userId } = createOrderDto;

    const totalAmount = orderItems?.reduce((initValue, item) => {
      return initValue + item.quantity * item.price;
    }, 0);

    const data = {
      userId,
      totalAmount,
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

  @Post('/delete')
  async remove(@Body() { ids }: DeleteOrderDto) {
    const res = await this.orderService.delete(ids);
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }
}

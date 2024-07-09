import { Controller, Get, Param, Post, Put, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  CreateProductDto,
  DeleteProductDto,
  UpdateProductDto,
} from './products.dto';
import { Public } from 'src/contans';
import { ErrorException } from 'src/exceptions/error-exception';
import { Paging } from 'src/dto/paging.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('products')
export class ProductsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly productService: ProductsService,
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  @Public()
  async findAll(@Query() paging: Paging) {
    const res = await this.productService.findAll(paging, {
      images: true,
    });
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.productService.getDetail(id);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post()
  @Public()
  async create(@Body() createProductDto: CreateProductDto) {
    const { images, ...other } = createProductDto;
    const res = await this.productService.create(other);

    if (res instanceof ErrorException) {
      throw res;
    }
    const createdAt = new Date();
    const imgs = images.map((i) => ({
      url: i,
      parentId: res.id,
      createdAt,
    }));

    await this.prisma.images.createMany({
      data: imgs,
    });

    return res;
  }

  @Put(':id')
  @Public()
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const { images, ...other } = updateProductDto;

    const res = await this.productService.update(id, other);

    if (res instanceof ErrorException) {
      throw res;
    }

    const createdAt = new Date();

    const imgs = images.map((i) => ({
      url: i,
      parentId: res.id,
      createdAt,
    }));

    await Promise.all([
      this.prisma.images.deleteMany({
        where: {
          parentId: id,
        },
      }),
      this.prisma.images.createMany({
        data: imgs,
      }),
    ]);

    return res;
  }

  @Post('/delete')
  async remove(@Body() { ids }: DeleteProductDto) {
    const res = await this.productService.delete(ids);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }
}

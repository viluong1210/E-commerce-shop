import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { CategorysService } from './categorys.service';
import {
  CreateCategorysDto,
  DeleteCategorysDto,
  UpdateCategorysDto,
} from './categorys.dto';
import { Public } from 'src/contans';
import { ErrorException } from 'src/exceptions/error-exception';
import { Paging } from 'src/dto/paging.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('categorys')
export class CategorysController {
  constructor(
    private readonly service: CategorysService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  @Public()
  async findAll(@Query() paging: Paging) {
    const res = await this.service.findAll(paging);
    if (res instanceof ErrorException) {
      throw new BadRequestException(res);
    }

    return res;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.service.findOne(id);

    if (res instanceof ErrorException) {
      throw new ErrorException('categoryName already exists');
    }

    return res;
  }

  @Post()
  @Public()
  async create(@Body() createCategorysDto: CreateCategorysDto) {
    const res = await this.service.create(createCategorysDto);

    if (res instanceof ErrorException) {
      throw new BadRequestException('Category name already exists');
    }

    return res;
  }

  @Put(':id')
  @Public()
  async update(
    @Param('id') id: string,
    @Body() updateCategorysDto: UpdateCategorysDto,
  ) {
    const res = await this.service.update(id, updateCategorysDto);

    if (res instanceof ErrorException) {
      throw new BadRequestException(res);
    }

    return res;
  }

  @Post('/delete')
  @Public()
  async remove(@Body() { id }: DeleteCategorysDto) {
    const res = await this.service.delete([id]);

    if (res instanceof ErrorException) {
      throw new BadRequestException(res);
    }

    const products = await this.prisma.products.findMany({
      where: {
        category: id,
      },
      select: {
        id: true,
      },
    });

    await Promise.all([
      this.prisma.products.deleteMany({
        where: {
          category: {
            equals: id,
          },
        },
      }),
      this.prisma.images.deleteMany({
        where: {
          parentId: {
            in: products.map((i) => i.id),
          },
        },
      }),
    ]);

    return res;
  }
}

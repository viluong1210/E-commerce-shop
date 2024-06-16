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
import { Paging, RespondsType } from 'src/dto/paging.dto';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly service: CategorysService) {}

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
  async remove(@Body() { ids }: DeleteCategorysDto) {
    const res = await this.service.delete(ids);

    if (res instanceof ErrorException) {
      throw new BadRequestException(res);
    }

    return res;
  }
}

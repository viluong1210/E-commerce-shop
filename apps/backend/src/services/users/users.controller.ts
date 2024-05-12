import { Controller, Get, Param, Post, Put, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './users.dto';
import { Public } from 'src/contans';
import { ErrorException } from 'src/exceptions/error-exception';
import { Paging } from 'src/dto/paging.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('users')
export class UsersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly userService: UsersService,
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  @Public()
  async findAll(@Query() paging: Paging) {
    const res = await this.userService.findAll(paging);
    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.userService.findOne(id);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    const res = await this.userService.create(createUserDto);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const res = await this.userService.update(id, updateUserDto);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }

  @Post('/delete')
  async remove(@Body() { ids }: DeleteUserDto) {
    const res = await this.userService.delete(ids);

    if (res instanceof ErrorException) {
      throw res;
    }

    return res;
  }
}

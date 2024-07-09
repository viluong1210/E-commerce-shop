import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
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

  @Public()
  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    const { passWord, ...other } = createUserDto;

    const user = await this.prisma.users.findFirst({
      where: {
        phone: createUserDto.phone,
      },
    });

    if (user) {
      return new ErrorException(
        'Phone Number was used!!',
        HttpStatus.BAD_GATEWAY,
        'BAD_GATEWAY',
      );
    }

    const inforMation = await this.prisma.userInformation.create({
      data: other,
    });

    const res = await this.userService.create({
      informationId: inforMation.id,
      phone: createUserDto.phone,
      passWord,
    });

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

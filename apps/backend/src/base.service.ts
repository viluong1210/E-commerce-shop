import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ErrorException } from './exceptions/error-exception';
import { Paging, RespondsType } from './dto/paging.dto';
import { createPaging } from './utils/Paging';

@Injectable()
export class BaseService<T> {
  protected model: string;
  protected prisma = new PrismaService();

  async findAll(paging: Paging): Promise<RespondsType<T>> {
    const { skip, take, where } = createPaging(paging);

    const [data, count] = await Promise.all([
      this.prisma[this.model].findMany({
        where: {
          ...where,
          isDeleted: false,
        },
        skip,
        take,
      }),
      this.prisma[this.model].count({
        where: {
          ...where,
          isDeleted: false,
        },
      }),
    ]);

    return {
      data,
      page: paging?.page || 1,
      count,
      limit: paging?.limit || 10,
    };
  }

  async findOne(id: string): Promise<T> {
    return this.prisma[this.model].findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: any): Promise<T | ErrorException> {
    try {
      const createdAt = new Date();
      const res = await this.prisma[this.model].create({
        data: { ...data, createdAt },
      });
      return res;
    } catch (error) {
      return new ErrorException(error);
    }
  }

  async delete(ids: string[]): Promise<T | ErrorException> {
    try {
      return this.prisma[this.model].updateMany({
        where: {
          id: {
            in: ids,
          },
        },
        data: {
          isDeleted: true,
        },
      });
    } catch (error) {
      return new ErrorException(error);
    }
  }

  async deleteAllData() {
    try {
      await this.prisma.users.deleteMany();

      await this.prisma.orderItems.deleteMany();

      await this.prisma.images.deleteMany();
      await this.prisma.products.deleteMany();
      await this.prisma.carts.deleteMany();
      await this.prisma.cartItems.deleteMany();
      await this.prisma.categorys.deleteMany();
      await this.prisma.orders.deleteMany();
      console.log('Deleted all data successfully.');
      return true;
    } catch (error) {
      console.error('Error deleting data:', error);
      return false;
    }
  }
  async deleteReal(ids: string[]): Promise<T | ErrorException> {
    try {
      return this.prisma[this.model].delete({
        where: {
          id: {
            in: ids,
          },
        },
      });
    } catch (error) {
      return new ErrorException(error);
    }
  }

  async update(id: string, data: any): Promise<T | ErrorException> {
    try {
      const res = await this.findOne(id);

      if (res instanceof ErrorException) {
        return res;
      }

      return this.prisma[this.model].update({
        where: {
          id: id,
        },
        data: data,
      });
    } catch (error) {
      return new ErrorException(error);
    }
  }
}

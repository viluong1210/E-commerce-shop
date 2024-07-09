import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { BaseService } from 'src/base.service';

@Injectable()
export class UsersService extends BaseService<Users> {
  protected model = 'users';
  constructor() {
    super();
  }

  async findOne(phone: string): Promise<any> {
    return this.prisma.users.findFirst({
      where: {
        phone,
      },
      include: {
        information: true,
      },
    });
  }
}

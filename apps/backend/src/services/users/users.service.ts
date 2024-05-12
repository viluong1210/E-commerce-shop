import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { BaseService } from 'src/base.service';

@Injectable()
export class UsersService extends BaseService<Users> {
  protected model = 'users';
  constructor() {
    super();
  }

  async findOne(email: string): Promise<any> {
    return this.prisma.users.findFirst({
      where: {
        email,
      },
    });
  }
}

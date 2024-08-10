import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user: Users = await this.usersService.findOne(username);

    if (user?.passWord !== pass) {
      throw new UnauthorizedException();
    }
    const { passWord, ...result } = user;
    // const payload = { sub: user.id, phone: user.phone };
    const expiresIn = 3600 * 24 * 30; // seconds
    return {
      access_token: await this.jwtService.signAsync(result, {
        expiresIn,
      }),
    };
  }
}

import { User } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Hash } from 'src/providers/hash';

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class CreateUsersService {
  constructor(private prisma: PrismaService, private hashProvider: Hash) {}

  async execute({ name, email, password }: CreateUserRequest): Promise<User> {
    const userExists = await this.prisma.user.findUnique({ where: { email } });

    if (userExists) {
      throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    }

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: await this.hashProvider.generateHash(password),
      },
    });

    return user;
  }
}

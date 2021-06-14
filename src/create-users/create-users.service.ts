import { User } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HashProvider } from 'src/hashProvider';
import { PrismaService } from 'src/prisma/prisma.service';

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class CreateUsersService {
  constructor(
    private prisma: PrismaService,
    private hashProvider: HashProvider,
  ) {}

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

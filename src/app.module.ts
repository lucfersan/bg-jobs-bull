import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUsersService } from './create-users/create-users.service';
import { CreateUsersController } from './create-users/create-users.controller';
import { HashProvider } from './hashProvider';

@Module({
  imports: [],
  controllers: [CreateUsersController],
  providers: [PrismaService, CreateUsersService, HashProvider],
})
export class AppModule {}

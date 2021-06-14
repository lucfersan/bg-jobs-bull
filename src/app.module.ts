import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUsersService } from './create-users/create-users.service';
import { CreateUsersController } from './create-users/create-users.controller';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { Hash } from './providers/hash';

@Module({
  imports: [ConfigModule.forRoot(), MailModule],
  controllers: [CreateUsersController],
  providers: [PrismaService, CreateUsersService, Hash],
})
export class AppModule {}

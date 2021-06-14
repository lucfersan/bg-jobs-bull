import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUsersService } from './create-users/create-users.service';
import { CreateUsersController } from './create-users/create-users.controller';
import { HashProvider } from './hashProvider';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MailModule],
  controllers: [CreateUsersController],
  providers: [PrismaService, CreateUsersService, HashProvider],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUsersService } from './create-users/create-users.service';
import { CreateUsersController } from './create-users/create-users.controller';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { Hash } from './providers/hash';
import { BullModule } from '@nestjs/bull';
import { SendRegistrationMailProducer } from './jobs/registration/send-registration-mail-producer';
import { SendRegistrationMailConsumer } from './jobs/registration/send-registration-mail-consumer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'sendRegistrationMailQueue',
    }),
  ],
  controllers: [CreateUsersController],
  providers: [
    PrismaService,
    CreateUsersService,
    Hash,
    SendRegistrationMailProducer,
    SendRegistrationMailConsumer,
  ],
})
export class AppModule {}

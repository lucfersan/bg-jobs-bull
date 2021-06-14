import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-users/create-user-dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
@Processor('sendRegistrationMailQueue')
export class SendRegistrationMailConsumer {
  constructor(private mailService: MailService) {}

  @Process('sendRegistrationMailJob')
  async consumer(job: Job<CreateUserDTO>): Promise<void> {
    const { data } = job;

    await this.mailService.sendMail({
      to: data.email,
      from: 'Nest Jobs <nest@jobs.com>',
      subject: '[NestJobs] Welcome!',
      text: 'Welcome to our platform! 😃',
    });
  }
}

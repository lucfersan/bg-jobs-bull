import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDTO } from './send-mail-dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail({ to, from, subject, text }: SendMailDTO): Promise<void> {
    await this.mailerService.sendMail({
      to,
      from,
      subject,
      text,
    });
  }
}

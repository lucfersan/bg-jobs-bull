import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDTO } from './create-user-dto';
import { CreateUsersService } from './create-users.service';

@Controller('users')
export class CreateUsersController {
  constructor(
    private createUsers: CreateUsersService,
    private mailService: MailService,
  ) {}

  @Post()
  async create(
    @Body() { name, email, password }: CreateUserDTO,
    @Res() response: Response,
  ): Promise<Response> {
    const user = await this.createUsers.execute({ name, email, password });

    delete user.password;

    await this.mailService.sendMail({
      to: user.email,
      from: 'Nest Jobs <nest@jobs.com>',
      subject: '[NestJobs] Welcome!',
      text: 'Welcome to our platform! 😃',
    });

    return response.json(user);
  }
}

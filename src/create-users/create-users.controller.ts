import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from './create-user-dto';
import { CreateUsersService } from './create-users.service';

@Controller('users')
export class CreateUsersController {
  constructor(private createUsers: CreateUsersService) {}

  @Post()
  async create(
    @Body() { name, email, password }: CreateUserDTO,
    @Res() response: Response,
  ): Promise<Response> {
    const user = await this.createUsers.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}

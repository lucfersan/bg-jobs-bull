import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/create-users/create-user-dto';

@Injectable()
export class SendRegistrationMailProducer {
  constructor(@InjectQueue('sendRegistrationMailQueue') private queue: Queue) {}

  async producer(data: CreateUserDTO): Promise<void> {
    await this.queue.add('sendRegistrationMailJob', data);
  }
}

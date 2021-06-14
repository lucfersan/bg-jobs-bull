import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';

@Injectable()
export class Hash {
  async generateHash(content: string): Promise<string> {
    const hashedContent = await hash(content, 8);
    return hashedContent;
  }
}

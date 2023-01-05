import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greetings(name = 'World'): string {
    return `Hello ${name}!`;
  }
}

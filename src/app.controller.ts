import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NameQueryDto } from './dtos/name-query.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  helloWorld(@Query() nameParam: NameQueryDto): string {
    return this.appService.greetings(nameParam.name);
  }
}

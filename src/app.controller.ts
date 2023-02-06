import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/members/:nameId')
  getHello(@Param('nameId') nameId: string): string {
    return this.appService.getHello(nameId);
  }

  @Get('/api/one')
  getApiOneResp(): any {
    return {
      result: "Result from API 1 fetch successful"
    }
  }
  @Get('/api/two')
  getApiTwoResp(): any {
    return {
      result: "Result from API 2 fetch successful"
    }
  }
  @Get('/api/three')
  getApiThreeResp(): any {
    return {
      result: "Result from API 3 fetch successful"
    }
  }
}

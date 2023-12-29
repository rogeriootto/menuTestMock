import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): any {
    return this.appService.getAll();
  }

  @Get(':appName')
  getOneByAppName(@Param('appName') appName: string): object {
    return this.appService.getOneByAppName(appName);
  }
}

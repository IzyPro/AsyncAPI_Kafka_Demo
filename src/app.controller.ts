import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('broadcast')
  sendMessage() {
    const message = {
      success: true,
      message: "Hello World!",
      count: 12
    };
    return this.appService.sendBroadcast(JSON.stringify(message));
  }
}

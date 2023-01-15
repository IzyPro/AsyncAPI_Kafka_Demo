import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer_service';

@Injectable()
export class AppService {
  constructor(private readonly producerService:ProducerService){}

  // calls the producer service to broadcast a message
  async sendBroadcast(message:string) {
    await this.producerService.produce({
      topic: 'broadcast',
      messages: [{value: message}]
    });
    return JSON.parse(message);
  }
}

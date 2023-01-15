import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BroadcastConsumer } from './broadcast_consumer';
import { KafkaModule } from './kafka/kafka_module';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [KafkaModule, AppService, BroadcastConsumer],
})
export class AppModule {}

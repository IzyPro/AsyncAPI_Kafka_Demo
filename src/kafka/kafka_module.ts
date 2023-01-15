import { Module } from "@nestjs/common";
import { ConsumerService } from "./consumer_service";
import { ProducerService } from "./producer_service";

@Module({
    providers: [ProducerService, ConsumerService],
    exports: [ProducerService, ConsumerService]
})
export class KafkaModule{}
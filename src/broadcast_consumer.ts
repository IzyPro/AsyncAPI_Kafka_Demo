import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./kafka/consumer_service";

@Injectable()
export class BroadcastConsumer implements OnModuleInit{
    constructor(private readonly consumerService:ConsumerService){}

    // starts listening for messages with topic broadcast on 
    // module initialization and logs whenever a message is received
    async onModuleInit() {
        await this.consumerService.consume(
            {topics: ['broadcast']}, 
            {
                eachMessage: async ({topic, partition, message}) => {
                    console.log(`Receiving a new message from\nTopic: ${topic.toString()}\nMessage: ${message.value.toString()}\n`) 
                }
            }
        );
    }
}
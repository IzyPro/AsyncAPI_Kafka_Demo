import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from "kafkajs";

@Injectable()
export class ConsumerService implements OnApplicationShutdown{
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092']
    });
    // multiple consumers
    private readonly consumers:Consumer[] = [];

    // consume data/messages
    // subscribes to the topic passed in
    async consume(topic:ConsumerSubscribeTopics, config: ConsumerRunConfig){
        const consumer = this.kafka.consumer({groupId: 'asyncapi_kafka_demo'});
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }
    
    // disconnect consumer on application shutdown
    async onApplicationShutdown(signal?: string) {
        for(const consumer of this.consumers){
            await consumer.disconnect();
        }
    }
}
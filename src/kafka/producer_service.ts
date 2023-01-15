import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown{
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092']
    });
    private readonly producer:Producer = this.kafka.producer();

    // Connect producer on module initialization 
    async onModuleInit(){
        await this.producer.connect();
    }

    //sends broadcast/data/record
    async produce(record:ProducerRecord){
        await this.producer.send(record);
    }

    // Disconnect producer when app shuts down
    async onApplicationShutdown(signal?: string) {
        await this.producer.disconnect();
    }
}
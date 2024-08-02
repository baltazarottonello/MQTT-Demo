import { Inject, Injectable } from '@nestjs/common';
import { MqttClient } from 'mqtt';

@Injectable()
export class MqttService {
  constructor(@Inject('MQTTClient') private readonly mqttClient: MqttClient) {}

  async publish(topic: string, message: string | Buffer) {
    const result = this.mqttClient.publish(topic, message);
    if (!result) {
      throw new Error('Error publishing');
    }
    return true;
  }
}

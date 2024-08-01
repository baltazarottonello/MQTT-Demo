import { Inject, Injectable } from '@nestjs/common';
import { MqttClient, connect } from 'mqtt';

@Injectable()
export class MqttService {
  constructor(@Inject('MQTTClient') private readonly mqttClient: MqttClient) {}
}

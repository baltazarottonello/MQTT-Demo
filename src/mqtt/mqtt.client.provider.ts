import { Provider } from '@nestjs/common';
import mqtt, { IClientOptions, MqttClient, connect } from 'mqtt';

export const MqttClientProvider: Provider = {
  provide: 'MQTTClient',
  useFactory: async (): Promise<MqttClient> => {
    const options: IClientOptions = {
      host: 'localhost',
      port: 1883,
    };
    const mqttClient = connect(options);

    mqttClient.on('connect', () => {
      console.log('MQTT client connected');
      mqttClient.subscribe('temperature', (err) => {
        if (err) {
          console.log('Subscription error:', err);
        }
      });
    });

    mqttClient.on('message', (topic: string, message: Buffer) => {
      console.log(`Received message from ${topic}: ${message.toString()}`);
    });

    return mqttClient;
  },
};

export class TopicPublishingDTO {
  topic: string;
  message: string;
}

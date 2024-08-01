import { Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { MqttController } from './mqtt.controller';
import { MqttClientProvider } from './mqtt.client.provider';

@Module({
  imports: [],
  controllers: [MqttController],
  providers: [MqttService, MqttClientProvider],
})
export class MqttModule {}

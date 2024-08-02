import { Body, Controller, Post, Res } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { TopicPublishingDTO } from './mqtt.client.provider';

@Controller('mqtt')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Post('/publish')
  async publishToTopic(@Res() res: any, @Body() body: TopicPublishingDTO) {
    try {
      const data = {
        topic: body.topic,
        message: body.message,
      };
      this.mqttService.publish(data.topic, data.message);
      res
        .status(200)
        .json({ message: `message published on topic ${data.topic}` });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

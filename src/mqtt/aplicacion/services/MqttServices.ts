import { MqttPort } from "../ports/MqttPort";

export class MqttService {
  private mqttPort: MqttPort;

  constructor(mqttPort: MqttPort) {
    this.mqttPort = mqttPort;
  }

  publishMessage(topic: string, message: string): void {
    this.mqttPort.publishMessage(topic, message);
  }

  subscribeToTopic(topic: string): void {
    this.mqttPort.subscribeToTopic(topic);
  }

  listenToEvent(topic: string, callback: (data: any) => void): void {
    this.mqttPort.listenToEvent(topic, callback);
  }
  
}
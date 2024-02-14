// src/app/mqtt/adapters/inbound/mqttAdapter.ts
import { MqttPort } from '../../aplicacion/ports/MqttPort';
import mqtt, { MqttClient } from 'mqtt';

export class MqttInboundAdapter implements MqttPort {
  private client: MqttClient;

  constructor(client: MqttClient) {
    this.client = client.on('connect', () => {
      console.log('Conexión MQTT establecida');
    });;
  }

  publishMessage(topic: string, message: string): void {
    this.client.publish(topic, message);
  }

  subscribeToTopic(topic: string): void {
    this.client.subscribe(topic);
    this.client.on('message', (receivedTopic, receivedMessage) => {
      if (receivedTopic === topic) {
        const message = JSON.parse(receivedMessage.toString());
        console.log('Mensaje recibido:', message);
      }
    });
  }

  listenToEvent(topic: string, callback: (data: any) => void): void {
    this.client.on('message', (receivedTopic, receivedMessage) => {
      if (receivedTopic === topic) {
        const parsedMessage = JSON.parse(receivedMessage.toString());
        callback(parsedMessage);
      }
    });
  }
}

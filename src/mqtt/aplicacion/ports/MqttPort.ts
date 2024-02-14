

export interface MqttPort {
  publishMessage(topic: string, message: string): void; 
  subscribeToTopic(topic: string): void;
  listenToEvent(topic: string, callback: (data: any) => void): void;
}

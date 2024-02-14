// src/app/application/use-cases/mqttToSocketIoUseCase.ts
import { MqttService } from '../../mqtt/aplicacion/services/MqttServices';
import { SocketIoService } from '../../socket/aplicacion/services/SocketService';

export class MqttToSocketIoUseCase {
  private mqttService: MqttService;
  private socketIoService: SocketIoService;

  constructor(mqttService: MqttService, socketIoService: SocketIoService) {
    this.mqttService = mqttService;
    this.socketIoService = socketIoService;
  }

  execute(): void {

    this.mqttService.subscribeToTopic('ah/');
    console.log("suscrito a proximida")

    // Escuchar eventos de MQTT y enviarlos a través de Socket.IO
    this.mqttService.listenToEvent('ah/', (data) => {
        console.log("data: " + data)
      // Enviar el mensaje a través de Socket.IO
      this.socketIoService.sendMessage('mqttEvent', data);
    });
  }
}
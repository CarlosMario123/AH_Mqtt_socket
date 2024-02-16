import { SocketIoOutboundAdapter } from "../../socket/adapters/outbound/socketSalidaAdapter";
import { MqttInboundAdapter } from "../../mqtt/adapters/inbound/MqttEntradaAdapter";
import { connect, MqttClient } from 'mqtt'
import { Server } from 'socket.io'; // Importa el tipo 'Server' desde 'socket.io'
import { MqttService } from "../../mqtt/aplicacion/services/MqttServices";
import { SocketIoService } from "../../socket/aplicacion/services/SocketService";
import { MqttToSocketIoUseCase } from "../Aplicacion/mqttToSocketIoUseCase";
export default class SocketToMqtt{
    private mqttService: MqttService;
    private socketIoService: SocketIoService;
    private mqttToSocketIo :MqttToSocketIoUseCase;
    constructor(mqttClient : MqttClient,io:Server){
        //adapatmos el adapter para el serveMqtt
        this.mqttService = new MqttService(new MqttInboundAdapter(mqttClient));
        this.socketIoService = new SocketIoService(new SocketIoOutboundAdapter(io))
         // Configurar el caso de uso para la integración entre MQTT y Socket.IO
        this.mqttToSocketIo = new MqttToSocketIoUseCase(this.mqttService,this.socketIoService);

        //corremos
        this.mqttToSocketIo.execute();
}
}
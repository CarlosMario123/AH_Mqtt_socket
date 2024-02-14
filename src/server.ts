import express from 'express';
import { connect, MqttClient } from 'mqtt'
import http from 'http';
import { Server } from 'socket.io'; // Importa el tipo 'Server' desde 'socket.io'
import { MqttInboundAdapter } from './mqtt/adapters/inbound/MqttEntradaAdapter';
import { MqttService } from './mqtt/aplicacion/services/MqttServices';
import { SocketIoOutboundAdapter } from './socket/adapters/outbound/socketSalidaAdapter';
import { SocketIoService } from './socket/aplicacion/services/SocketService';
import { MqttToSocketIoUseCase } from './MqttToSocketIo/Aplicacion/mqttToSocketIoUseCase';

const app = express();
const server = http.createServer(app);
const io = new Server(server); // Crea una instancia de 'Server' para Socket.IO
const mqttClient: MqttClient = connect('mqtt://broker.hivemq.com', {
  protocol: 'mqtt', // Especifica el protocolo MQTT
  port: 1883,        // Puerto por defecto para MQTT
});

// Configurar el adaptador de entrada MQTT
const mqttInboundAdapter = new MqttInboundAdapter(mqttClient);

// Configurar el adaptador de salida Socket.IO
const socketIoOutboundAdapter = new SocketIoOutboundAdapter(io);

// Configurar los servicios MQTT y Socket.IO
const mqttService = new MqttService(mqttInboundAdapter);
const socketIoService = new SocketIoService(socketIoOutboundAdapter);

// Configurar el caso de uso para la integración entre MQTT y Socket.IO
const mqttToSocketIoUseCase = new MqttToSocketIoUseCase(mqttService, socketIoService);
mqttToSocketIoUseCase.execute();


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

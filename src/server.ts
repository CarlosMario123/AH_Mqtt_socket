import express from 'express';
import { connect, MqttClient } from 'mqtt'
import http from 'http';
import { Server } from 'socket.io'; // Importa el tipo 'Server' desde 'socket.io'
import { ConsumerEventsMQTTSocket } from './events/AllConsumer';
const app = express();
const server = http.createServer(app);
const io = new Server(server); // Crea una instancia de 'Server' para Socket.IO esto es el que se usa en toda la app


const mqttClient: MqttClient = connect('mqtt://broker.hivemq.com', {
  protocol: 'mqtt', // Especifica el protocolo MQTT
  port: 1883,        // Puerto por defecto para MQTT
});



ConsumerEventsMQTTSocket(io,mqttClient);



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

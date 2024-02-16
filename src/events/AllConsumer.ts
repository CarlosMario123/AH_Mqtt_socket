import { Server } from 'socket.io'; // Importa el tipo 'Server' desde 'socket.io'
import { MqttClient } from 'mqtt'
import SocketToMqtt from '../MqttToSocketIo/infraestructura/SocketRecibeMqtt';
export function ConsumerEventsMQTTSocket(io:Server,mqtt:MqttClient){
     //Se tiene pensado añadir eventos de mqtt junto socket io
     new SocketToMqtt(mqtt,io);
}
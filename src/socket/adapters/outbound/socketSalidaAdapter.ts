import { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import { SocketIoPort } from '../../aplicacion/port/SocketPort';

export class SocketIoOutboundAdapter implements SocketIoPort {
  private socket: Server;  // Cambia el tipo de 'Socket' a 'Server'

  constructor(socket: Server) {  // Cambia el tipo de 'Socket' a 'Server'
    this.socket = socket;
  }

  sendMessage(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  listenToEvent(event: string, callback: (data: any) => void): void {
    console.log("No se usará por el momento");
  }
}

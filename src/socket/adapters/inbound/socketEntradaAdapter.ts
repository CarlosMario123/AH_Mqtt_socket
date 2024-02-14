import { SocketIoPort } from '../../aplicacion/port/SocketPort';
import { Server, Socket } from 'socket.io';

export class SocketIoInboundAdapter implements SocketIoPort {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  sendMessage(event: string, data: any): void {
    this.io.emit(event, data);
  }

  listenToEvent(event: string, callback: (data: any) => void): void {
    this.io.on(event, (socket: Socket) => {
      socket.on(event, (data: any) => {
        callback(data);
      });
    });
  }
}

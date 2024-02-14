import { SocketIoPort } from "../port/SocketPort";

export class SocketIoService {
  private socketIoPort: SocketIoPort;

  constructor(socketIoPort: SocketIoPort) {
    this.socketIoPort = socketIoPort;
  }

  sendMessage(event: string, data: any): void {
    this.socketIoPort.sendMessage(event, data);
  }

  listenToEvent(event: string, callback: (data: any) => void): void {
    this.socketIoPort.listenToEvent(event, callback);
  }
}

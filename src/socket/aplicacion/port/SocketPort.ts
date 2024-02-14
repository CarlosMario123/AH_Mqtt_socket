
export interface SocketIoPort {
  
    sendMessage(event: string, data: any): void;
  
    // Método para escuchar eventos de Socket.IO
    listenToEvent(event: string, callback: (data: any) => void): void;
  }
  
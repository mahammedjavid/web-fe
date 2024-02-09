import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket !: Socket
  constructor() { 
    this.connectToSocket()
  }
  connectToSocket(){
    this.socket = io('http://localhost:3000')

  }
}

import { Component, OnInit, inject } from '@angular/core';
import { SocketService } from '../../shared/socket.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-socket',
  standalone: true,
  imports: [FormsModule , NgFor],
  providers : [SocketService],
  templateUrl: './socket.component.html',
  styleUrl: './socket.component.scss'
})
export class SocketComponent implements OnInit{
  message:string = ''
  roomID : string = ''
  all_data : any = ['hi']
  private socketService = inject(SocketService);
  socketId: any;
  ngOnInit(): void {
    this.connctSocket()
    console.log("hi")
  }
  sendMessage(){
    this.socketService.socket.emit('send-message', {message :this.message , roomId : this.roomID})
    this.message = ''
  }
  connctSocket(){
    this.socketService.socket.on('connect',()=>{
      this.socketId = this.socketService.socket.id
      console.log('socket connected')
    })
    this.socketService.socket.on('new-message', (data)=>{
      this.all_data.push(data)
    })
  }
  createRoom(){
    this.socketService.socket.emit('room-join',this.roomID)
    // this.roomID = ''
  }

}

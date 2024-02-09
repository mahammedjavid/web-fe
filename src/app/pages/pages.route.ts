import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';

export default [
  {
    path: 'socket',
    loadComponent : ()=> import('../pages/socket/socket.component').then((m)=>m.SocketComponent),
  },

] as Routes;

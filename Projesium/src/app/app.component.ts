import { Component } from '@angular/core';
import { MsgService } from './services/msg.service';
import { SocketService } from './services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService, MsgService]
})
export class AppComponent {
  title = 'PROJESIUM';


  }



import { Component, OnInit } from '@angular/core';
import { MsgService, Message } from '../services/msg.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css'],
  providers: [SocketService, MsgService]

})
export class LiveComponent implements OnInit {

  msj: Message;

  constructor(private msgService: MsgService) {}

  ngOnInit() {
    this.msgService.messages.subscribe(data => this.msj = data);


    }
}

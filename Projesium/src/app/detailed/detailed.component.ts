import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ITicker } from '../models/ticker';
import { ICurrency } from '../models/currency';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { MsgService, Message } from '../services/msg.service';




@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

   tick: ICurrency;
  order: ITicker;
  public values = [];
  msj:Message;
  
  

  constructor(private apiservice: ApiService,private route:ActivatedRoute,private socketservice:SocketService,private msgService:MsgService) { }

  

  ngOnInit() {
    let symbol = this.route.snapshot.paramMap.get('symbol');

    this.apiservice.getTicker(symbol)
    .subscribe((res: ICurrency)=>{this.tick = res;});

    // this.msgService.messages.subscribe(data => this.msj = data);



    this.apiservice.getTrade(symbol)
    .subscribe(data => this.values = data);

    this.apiservice.getOrder(symbol)
    .subscribe((res: ITicker)=>{this.order=res;});


    
  }

 

 

}

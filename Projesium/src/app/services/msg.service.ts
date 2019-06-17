import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from './socket.service';

const CHAT_URL = 'wss://stream.binance.com:9443/ws/ethbtc@ticker';

export interface Message {
  sym: string;
  prch: string;
  prchp: string;
  lastp: string;
  weigh:string;
  bestbid:string;
  bestbidq:string;
  bestask:string;
  bestaskq:string;
  numoftrd:string;

}


@Injectable({
  providedIn: 'root'
})


export class MsgService {
  public messages: Subject<Message>;

constructor(wsService: SocketService) {  this.messages = wsService.connect(CHAT_URL).map(
  (response: MessageEvent): Message => {
    const data = JSON.parse(response.data);

    return {
      sym: data.s,
      lastp: data.c,
      prch: data.p,
      prchp: data.P,
      weigh:data.w,
      bestbid:data.b,
      bestbidq:data.B,
      bestask:data.a,
      bestaskq:data.A,
      numoftrd:data.n
    };

    }
) as Subject<Message>;
}


}

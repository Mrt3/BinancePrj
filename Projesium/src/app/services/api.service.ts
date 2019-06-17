import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from '../models/currency';
import { Observable,interval } from 'rxjs';
import { ITicker } from '../models/ticker';
import { Trade } from '../models/trade';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient) { }

getCurrency(): Observable<ICurrency[]> {
  return this.http.get<ICurrency[]>('https://api.binance.com/api/v1/ticker/24hr');
}

getTicker(symbol): Observable<ICurrency> {
  return this.http.get<ICurrency>('https://api.binance.com/api/v1/ticker/24hr'+'?symbol='+symbol);

}

getTrade(symbol): Observable<Trade[]> {
  return this.http.get<Trade[]>('https://api.binance.com/api/v1/trades'+'?symbol='+symbol);

}

getOrder(symbol): Observable<ITicker> {
  return this.http.get<ITicker>('https://api.binance.com/api/v1/depth'+'?symbol='+symbol);

}

}

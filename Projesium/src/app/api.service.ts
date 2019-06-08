import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from './currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

getCurrency(): Observable<ICurrency[]> {
  return this.http.get<ICurrency[]>('https://api.binance.com/api/v1/ticker/24hr');
}

}

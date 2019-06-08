import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public values = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getCurrency()
    .subscribe(data => this.values = data);
  }



}

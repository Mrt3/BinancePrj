import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  values=[];

  constructor(private apiservice: ApiService, private router: Router, private msgService: MsgService) { }

  ngOnInit() {

    this.apiservice.getCurrency()
    .subscribe(data => this.values = data);


  }

onSelect(value) {
this.router.navigate(['/detailed', value.symbol]);
}

}

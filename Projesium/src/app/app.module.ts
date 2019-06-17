import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { LiveComponent } from './live/live.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);



@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      LiveComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      FusionChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

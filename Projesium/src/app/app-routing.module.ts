import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ConvertPipe } from './convert.pipe';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'live', component: LiveComponent},
  {path: 'detailed/:symbol', component: DetailedComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule,
      ConvertPipe
   ],
   declarations: [
      ConvertPipe
   ]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, DetailedComponent,LiveComponent];

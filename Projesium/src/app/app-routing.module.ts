import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailedComponent } from './detailed/detailed.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'detailed', component: DetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, DetailedComponent];

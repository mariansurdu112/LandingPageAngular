import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorSecondComponent } from './profesor-second.component';


const routes: Routes = [
  { path: '', component: ProfesorSecondComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorSecondRoutingModule { }

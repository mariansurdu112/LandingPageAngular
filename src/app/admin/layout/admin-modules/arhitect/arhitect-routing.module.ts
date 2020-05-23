import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArhitectComponent } from './arhitect.component';


const routes: Routes = [
  { path: '', component: ArhitectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArhitectRoutingModule { }

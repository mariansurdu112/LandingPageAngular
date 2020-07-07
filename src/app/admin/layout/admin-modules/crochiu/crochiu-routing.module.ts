import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrochiuComponent } from './crochiu.component';


const routes: Routes = [
  { path: '', component: CrochiuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrochiuRoutingModule { }

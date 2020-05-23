import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmComponent } from './om.component';


const routes: Routes = [
  { path: '', component: OmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmRoutingModule { }

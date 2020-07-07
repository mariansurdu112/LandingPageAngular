import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CercetatorSecondComponent } from './cercetator-second.component';


const routes: Routes = [
  { path: '', component: CercetatorSecondComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CercetatorSecondRoutingModule { }

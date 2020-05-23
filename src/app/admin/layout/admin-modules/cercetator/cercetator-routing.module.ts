import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CercetatorComponent } from './cercetator.component';


const routes: Routes = [
  { path: '', component: CercetatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CercetatorRoutingModule { }

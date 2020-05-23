import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CribaComponent } from './criba.component';


const routes: Routes = [
  { path: '', component: CribaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CribaRoutingModule { }

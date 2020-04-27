import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationModule } from './administration.module';
import { AdministrationComponent } from './administration.component';


const routes: Routes = [
  { path: '', component: AdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

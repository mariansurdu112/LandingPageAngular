import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error.component';

const routes: Routes = [
  {
    path: '',
    component: ServerErrorComponent,
    children: []
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class ServerErrorRoutingModule { }

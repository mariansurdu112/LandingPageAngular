import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhitectRoutingModule } from './arhitect-routing.module';
import { ArhitectComponent } from './arhitect.component';


@NgModule({
  declarations: [ArhitectComponent],
  imports: [
    CommonModule,
    ArhitectRoutingModule
  ]
})
export class ArhitectModule { }

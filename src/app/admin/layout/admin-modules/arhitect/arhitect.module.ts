import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhitectRoutingModule } from './arhitect-routing.module';
import { ArhitectComponent } from './arhitect.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ArhitectComponent],
  imports: [
    CommonModule,
    ArhitectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArhitectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfesorComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfesorModule { }

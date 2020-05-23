import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorService } from './profesor.service';


@NgModule({
  declarations: [ProfesorComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProfesorService]
})
export class ProfesorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorEditComponent } from './components/profesor-edit/profesor-edit.component';
import { ProfesorItemAddComponent } from './components/profesor-item-add/profesor-item-add.component';
import { ProfesorItemEditComponent } from './components/profesor-item-edit/profesor-item-edit.component';


@NgModule({
  declarations: [ProfesorComponent, ProfesorEditComponent, ProfesorItemAddComponent, ProfesorItemEditComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfesorModule { }

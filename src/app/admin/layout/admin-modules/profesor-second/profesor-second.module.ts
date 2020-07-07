import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorSecondRoutingModule } from './profesor-second-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfesorSecondComponent } from './profesor-second.component';


@NgModule({
  declarations: [ProfesorSecondComponent],
  imports: [
    CommonModule,
    ProfesorSecondRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    SharedModule
  ]
})
export class ProfesorSecondModule { }

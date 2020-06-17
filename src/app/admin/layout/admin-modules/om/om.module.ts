import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmRoutingModule } from './om-routing.module';
import { OmComponent } from './om.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';


@NgModule({
  declarations: [OmComponent],
  imports: [
    CommonModule,
    OmRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class OmModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrochiuRoutingModule } from './crochiu-routing.module';
import { CrochiuComponent } from './crochiu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from '@progress/kendo-angular-editor';


@NgModule({
  declarations: [CrochiuComponent],
  imports: [
    CommonModule,
    CrochiuRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    EditorModule
  ]
})
export class CrochiuModule { }

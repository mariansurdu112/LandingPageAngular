import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CercetatorSecondRoutingModule } from './cercetator-second-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';
import { CercetatorSecondComponent } from './cercetator-second.component';


@NgModule({
  declarations: [CercetatorSecondComponent],
  imports: [
    CommonModule,
    CercetatorSecondRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class CercetatorSecondModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CribaRoutingModule } from './criba-routing.module';
import { CribaComponent } from './criba.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';


@NgModule({
  declarations: [CribaComponent],
  imports: [
    CommonModule,
    CribaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    EditorModule
  ]
})
export class CribaModule { }

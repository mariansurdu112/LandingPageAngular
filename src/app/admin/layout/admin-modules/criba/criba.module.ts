import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CribaRoutingModule } from './criba-routing.module';
import { CribaComponent } from './criba.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CribaComponent],
  imports: [
    CommonModule,
    CribaRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CribaModule { }

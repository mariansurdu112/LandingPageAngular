import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CribaRoutingModule } from './criba-routing.module';
import { CribaComponent } from './criba.component';


@NgModule({
  declarations: [CribaComponent],
  imports: [
    CommonModule,
    CribaRoutingModule
  ]
})
export class CribaModule { }

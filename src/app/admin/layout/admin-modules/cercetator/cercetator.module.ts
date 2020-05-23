import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CercetatorRoutingModule } from './cercetator-routing.module';
import { CercetatorComponent } from './cercetator.component';


@NgModule({
  declarations: [CercetatorComponent],
  imports: [
    CommonModule,
    CercetatorRoutingModule
  ]
})
export class CercetatorModule { }

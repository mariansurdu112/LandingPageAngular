import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CercetatorRoutingModule } from './cercetator-routing.module';
import { CercetatorComponent } from './cercetator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CercetatorService } from './cercetator.service';


@NgModule({
  declarations: [CercetatorComponent],
  imports: [
    CommonModule,
    CercetatorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CercetatorService]
})
export class CercetatorModule { }

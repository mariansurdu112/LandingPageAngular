import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmRoutingModule } from './om-routing.module';
import { OmComponent } from './om.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OmComponent],
  imports: [
    CommonModule,
    OmRoutingModule,
    ReactiveFormsModule
  ]
})
export class OmModule { }

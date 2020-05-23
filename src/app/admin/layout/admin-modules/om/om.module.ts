import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmRoutingModule } from './om-routing.module';
import { OmComponent } from './om.component';


@NgModule({
  declarations: [OmComponent],
  imports: [
    CommonModule,
    OmRoutingModule
  ]
})
export class OmModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal1Component } from './components/modal1/modal1.component';
import { Modal2Component } from './components/modal2/modal2.component';
import { Modal3Component } from './components/modal3/modal3.component';
import { Modal4Component } from './components/modal4/modal4.component';
import { Modal5Component } from './components/modal5/modal5.component';
import { Modal6Component } from './components/modal6/modal6.component';



@NgModule({
  declarations: [Modal1Component, Modal2Component, Modal3Component, Modal4Component, Modal5Component, Modal6Component],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

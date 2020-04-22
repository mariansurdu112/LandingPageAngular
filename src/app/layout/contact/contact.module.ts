import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ClientsContactModule } from './clients-contact.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ClientsContactModule
  ]
})
export class ContactModule { }

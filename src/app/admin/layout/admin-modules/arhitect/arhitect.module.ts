import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhitectRoutingModule } from './arhitect-routing.module';
import { ArhitectComponent } from './arhitect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArhitectService } from './arhitect.service';
import { ArhitectEditComponent } from './components/arhitect-edit/arhitect-edit.component';
import { ArhitectEditItemComponent } from './components/arhitect-edit-item/arhitect-edit-item.component';
import { ArhitectAddItemComponent } from './components/arhitect-add-item/arhitect-add-item.component';


@NgModule({
  declarations: [ArhitectComponent, ArhitectEditComponent, ArhitectEditItemComponent, ArhitectAddItemComponent],
  imports: [
    CommonModule,
    ArhitectRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ArhitectService]
})
export class ArhitectModule { }

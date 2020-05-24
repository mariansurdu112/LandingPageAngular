import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CercetatorRoutingModule } from './cercetator-routing.module';
import { CercetatorComponent } from './cercetator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CercetatorService } from './cercetator.service';
import { CercetatorEditComponent } from './components/cercetator-edit/cercetator-edit.component';
import { CercetatorItemAddComponent } from './components/cercetator-item-add/cercetator-item-add.component';
import { CercetatorEditItemComponent } from './components/cercetator-edit-item/cercetator-edit-item.component';


@NgModule({
  declarations: [CercetatorComponent, CercetatorEditComponent, CercetatorItemAddComponent, CercetatorEditItemComponent],
  imports: [
    CommonModule,
    CercetatorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CercetatorService]
})
export class CercetatorModule { }

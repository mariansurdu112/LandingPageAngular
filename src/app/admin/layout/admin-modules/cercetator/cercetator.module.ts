import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CercetatorRoutingModule } from './cercetator-routing.module';
import { CercetatorComponent } from './cercetator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CercetatorEditComponent } from './components/cercetator-edit/cercetator-edit.component';
import { CercetatorItemAddComponent } from './components/cercetator-item-add/cercetator-item-add.component';
import { CercetatorEditItemComponent } from './components/cercetator-edit-item/cercetator-edit-item.component';
import { EditorModule } from '@progress/kendo-angular-editor';


@NgModule({
  declarations: [CercetatorComponent, CercetatorEditComponent, CercetatorItemAddComponent,
     CercetatorEditItemComponent],
  imports: [
    CommonModule,
    CercetatorRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class CercetatorModule { }

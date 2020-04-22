import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LayoutComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
   ]
})
export class LayoutModule { }

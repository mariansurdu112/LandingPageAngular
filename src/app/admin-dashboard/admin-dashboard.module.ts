import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ AdminDashboardComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class AdminDashboardModule { }

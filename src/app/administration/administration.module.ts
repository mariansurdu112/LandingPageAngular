import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { LoginAdminComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdministrationComponent, LoginAdminComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }

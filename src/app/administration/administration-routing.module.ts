import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationModule } from './administration.module';
import { AdministrationComponent } from './administration.component';
import { LoginAdminComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      { path: 'login', component: LoginAdminComponent},
      { path: 'dashboard', component: AdminDashboardComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

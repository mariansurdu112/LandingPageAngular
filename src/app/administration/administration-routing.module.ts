import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { LoginAdminComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      { path: 'login', component: LoginAdminComponent },
      {
        path: 'dashboard',
        loadChildren: () => import('../admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
        // canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

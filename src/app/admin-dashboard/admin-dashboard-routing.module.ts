import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardModule } from './admin-dashboard.module';
import { AdminDashboardComponent } from './admin-dashboard.component';


const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
      { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
      { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
      { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

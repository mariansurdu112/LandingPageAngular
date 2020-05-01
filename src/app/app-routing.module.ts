import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

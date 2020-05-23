import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            // admin dashboard main routes
            { path: 'arhitect', loadChildren: () => import('./admin-modules/arhitect/arhitect.module').then((m) => m.ArhitectModule) },
            // tslint:disable-next-line:max-line-length
            { path: 'cercetator', loadChildren: () => import('./admin-modules/cercetator/cercetator.module').then((m) => m.CercetatorModule) },
            { path: 'contact', loadChildren: () => import('./admin-modules/contact/contact.module').then((m) => m.ContactModule) },
            { path: 'criba', loadChildren: () => import('./admin-modules/criba/criba.module').then((m) => m.CribaModule) },
            { path: 'om', loadChildren: () => import('./admin-modules/om/om.module').then((m) => m.OmModule) },
            { path: 'profesor', loadChildren: () => import('./admin-modules/profesor/profesor.module').then((m) => m.ProfesorModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

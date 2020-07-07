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
            // tslint:disable-next-line:max-line-length
            { path: 'cercetator-second', loadChildren: () => import('./admin-modules/cercetator-second/cercetator-second.module').then((m) => m.CercetatorSecondModule) },
            { path: 'contact', loadChildren: () => import('./admin-modules/contact/contact.module').then((m) => m.ContactModule) },
            { path: 'criba', loadChildren: () => import('./admin-modules/criba/criba.module').then((m) => m.CribaModule) },
            { path: 'crochiu', loadChildren: () => import('./admin-modules/crochiu/crochiu.module').then((m) => m.CrochiuModule) },
            { path: 'om', loadChildren: () => import('./admin-modules/om/om.module').then((m) => m.OmModule) },
            { path: 'profesor', loadChildren: () => import('./admin-modules/profesor/profesor.module').then((m) => m.ProfesorModule) },
            // tslint:disable-next-line:max-line-length
            { path: 'profesor-second', loadChildren: () => import('./admin-modules/profesor-second/profesor-second.module').then((m) => m.ProfesorSecondModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

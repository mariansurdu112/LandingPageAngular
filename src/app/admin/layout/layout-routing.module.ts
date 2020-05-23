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

            // admin dashboard component routes
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

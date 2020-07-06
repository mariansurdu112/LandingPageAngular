import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDashboardComponent } from './components/main/main-dashboard/main-dashboard.component';
import { MainCercetatorComponent } from './components/main/main-cercetator/main-cercetator.component';
import { MainArchitectComponent } from './components/main/main-architect/main-architect.component';
import { MainOmComponent } from './components/main/main-om/main-om.component';
import { MainCribaComponent } from './components/main/main-criba/main-criba.component';
import { MainContactComponent } from './components/main/main-contact/main-contact.component';
import { MainNavbarComponent } from './components/main/main-navbar/main-navbar.component';
import { MainHeaderComponent } from './components/main/main-header/main-header.component';
import { MainFooterComponent } from './components/main/main-footer/main-footer.component';
import { MainProfessorComponent } from './components/main/main-professor/main-professor.component';
import { MainActivitateAcademicaComponent } from './components/main/main-activitate-academica/main-activitate-academica.component';
import { MainActivitatePublicataComponent } from './components/main/main-activitate-publicata/main-activitate-publicata.component';
import { MainCrochiuComponent } from './components/main/main-crochiu/main-crochiu.component';
import { MainManagementComponent } from './components/main/main-management/main-management.component';
import { MainLucrariDeReferintaComponent } from './components/main/main-lucrari-de-referinta/main-lucrari-de-referinta.component';
import { MainPremiiSiDistinctiiComponent } from './components/main/main-premii-si-distinctii/main-premii-si-distinctii.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LayoutComponent, HomeComponent,
    FooterComponent, AboutComponent, ClientsComponent, PortfolioComponent,
    ServicesComponent, TeamComponent, MainDashboardComponent, MainCercetatorComponent,
    MainArchitectComponent, MainOmComponent, MainCribaComponent, MainContactComponent,
    MainNavbarComponent, MainHeaderComponent, MainFooterComponent,
    MainProfessorComponent, MainActivitateAcademicaComponent,
    MainActivitatePublicataComponent, MainManagementComponent,
    MainLucrariDeReferintaComponent, MainPremiiSiDistinctiiComponent, MainCrochiuComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class LayoutModule { }

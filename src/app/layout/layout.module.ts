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

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LayoutComponent, HomeComponent,
    FooterComponent, AboutComponent, ClientsComponent, PortfolioComponent,
    ServicesComponent, TeamComponent, MainDashboardComponent, MainCercetatorComponent,
    MainArchitectComponent, MainOmComponent, MainCribaComponent, MainContactComponent,
    MainNavbarComponent, MainHeaderComponent, MainFooterComponent, MainProfessorComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class LayoutModule { }

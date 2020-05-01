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
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './components/news/news.component';
import { DealsComponent } from './components/deals/deals.component';
import { PromoCampaignComponent } from './components/promo-campaign/promo-campaign.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LayoutComponent, HomeComponent, NewsComponent, DealsComponent,
    FooterComponent, PromoCampaignComponent, AboutComponent,
    ClientsComponent, LocationsComponent, ContactComponent, PortfolioComponent, ServicesComponent, TeamComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZTauhdYAPg-I4dGA451ss7WM8oGsACqY'
    })
  ]
})
export class LayoutModule { }

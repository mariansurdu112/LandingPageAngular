import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatModule } from '../../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, StatModule, ReactiveFormsModule],
    declarations: [DashboardComponent],
    providers: [DashboardService]
})
export class DashboardModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatModule } from '../../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, StatModule, ReactiveFormsModule],
    declarations: [DashboardComponent]
})
export class DashboardModule { }

import { Component, OnInit } from '@angular/core';
import { DashboardModel } from 'src/app/shared/models/dashboard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  dashboardData: DashboardModel;
  constructor(private dashboardService: DashboardService) {
    this.getData();
  }
  getData() {
    this.dashboardService.getData().subscribe((res) => {
      console.log(res);
      this.dashboardData = res[0];
    });
  }


  ngOnInit() { }

}

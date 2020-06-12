import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DashboardModel } from 'src/app/shared/models/dashboard.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    dashboardData: DashboardModel;
    dashboardForm = new FormGroup({
        mainTitle: new FormControl('', Validators.required),
        mainSubtitle: new FormControl('', Validators.required),
        mainPicture: new FormControl('', Validators.required)
    });
    closeResult: string;
    constructor(private modalService: NgbModal, private dashboardService: DashboardService) {
        this.getData();
    }
    editSection(content: any) {
        if (this.dashboardData) {
            this.dashboardForm.setValue({
                mainTitle: this.dashboardData.mainTitle, mainSubtitle: this.dashboardData.mainSubtitle,
                mainPicture: this.dashboardData.mainPicture
            });
        }
        this.modalService.open(content).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    save(data: any) {
        console.log(data);
        if (!this.dashboardData) {
            this.dashboardService.save(data).subscribe((res) => {
                this.dashboardData = data;
                console.log(res);
            });
        }
        else {
            this.dashboardData.mainPicture = data.mainPicture;
            this.dashboardData.mainTitle = data.mainTitle;
            this.dashboardData.mainSubtitle = data.mainSubtitle;
            this.dashboardService.saveEdit(this.dashboardData, this.dashboardData.id).subscribe((res) => {
                console.log(res);
            });
        }

    }

    getData() {
        this.dashboardService.getData().subscribe((res) => {
            console.log(res);
            this.dashboardData = res[0];
        });
    }


    ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DashboardModel } from 'src/app/shared/models/dashboard.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    dashboardData: DashboardModel = { mainTitle: 'Main title', subtitle: 'Sub title', mainPicture: '' };
    dashboardForm = new FormGroup({
        mainTitle: new FormControl('', Validators.required),
        subTitle: new FormControl('', Validators.required),
    });
    closeResult: string;
    constructor(private modalService: NgbModal) {

    }
    editSection(content: any) {
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
    }


    ngOnInit() { }

}

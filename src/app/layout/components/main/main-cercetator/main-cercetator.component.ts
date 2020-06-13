import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CercetatorSectionModel } from 'src/app/shared/models/cercetator-section.model';
import { CercetatorService } from 'src/app/shared/services/cercetator.service';

@Component({
  selector: 'app-main-cercetator',
  templateUrl: './main-cercetator.component.html',
  styleUrls: ['./main-cercetator.component.scss']
})
export class MainCercetatorComponent implements OnInit {
  closeResult: string;
  cercetatorData: CercetatorSectionModel;
  constructor(private modalService: NgbModal, private cercetatorService: CercetatorService) {
    this.getData();
  }
  open(content) {
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

  getData() {
    this.cercetatorService.getData().subscribe(res => {
      console.log(res);
      this.cercetatorData = res[0][0];
      if (res[0].length === 0) {
        this.cercetatorData = new CercetatorSectionModel();
        this.cercetatorData.title = '';
        this.cercetatorData.subtitle = '';
        this.cercetatorData.items = [];
      }
      else {
        this.cercetatorData = res[0][0];
      }
      this.cercetatorData.items = res[1];
    });
  }
  ngOnInit(): void {
  }
}
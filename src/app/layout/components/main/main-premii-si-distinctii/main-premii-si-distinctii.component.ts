import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/models/service-item.model';
import { CercetatorSectionModel } from 'src/app/shared/models/cercetator-section.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CercetatorService } from 'src/app/shared/services/cercetator.service';

@Component({
  selector: 'app-main-premii-si-distinctii',
  templateUrl: './main-premii-si-distinctii.component.html',
  styleUrls: ['./main-premii-si-distinctii.component.scss']
})
export class MainPremiiSiDistinctiiComponent implements OnInit {
  closeResult: string;
  currentItem: ServiceItem;
  cercetatorData: CercetatorSectionModel;
  constructor(private modalService: NgbModal, private cercetatorService: CercetatorService) {
    this.getData();
  }
  open(content: any, index: number) {
    this.currentItem = this.cercetatorData.items[index];
    console.log(this.currentItem);
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(
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
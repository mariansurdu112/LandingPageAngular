import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/models/service-item.model';
import { OmSectionModel } from 'src/app/shared/models/om-section.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OmService } from 'src/app/shared/services/om.service';

@Component({
  selector: 'app-main-lucrari-de-referinta',
  templateUrl: './main-lucrari-de-referinta.component.html',
  styleUrls: ['./main-lucrari-de-referinta.component.scss']
})
export class MainLucrariDeReferintaComponent implements OnInit {
  closeResult: string;
  currentItem: ServiceItem;
  omData: OmSectionModel;
  constructor(private modalService: NgbModal, private omService: OmService) {
    this.getData();
  }
  open(content: any, index: number) {
    this.currentItem = this.omData.items[index];
    console.log(this.currentItem);
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl', scrollable: true }).result.then(
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
    this.omService.getData().subscribe(res => {
      console.log(res);
      this.omData = res[0][0];
      if (res[0].length === 0) {
        this.omData = new OmSectionModel();
        this.omData.title = '';
        this.omData.subtitle = '';
        this.omData.items = [];
      }
      else {
        this.omData = res[0][0];
      }
      this.omData.items = res[1];
    });
  }
  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { CribaSectionModel } from 'src/app/shared/models/criba-section.model';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CribaService } from 'src/app/shared/services/criba.service';
import { environment } from 'src/environments/environment';
import { CrochiuService } from 'src/app/shared/services/crochiu.service';

@Component({
  selector: 'app-main-crochiu',
  templateUrl: './main-crochiu.component.html',
  styleUrls: ['./main-crochiu.component.scss']
})
export class MainCrochiuComponent implements OnInit {
  cribaData: CribaSectionModel;
  currentItem: PortfolioItemModel;
  closeResult: string;
  constructor(private modalService: NgbModal, private crochiuService: CrochiuService) {
    this.getData();
  }

  open(content: any, index: any) {
    this.currentItem = this.cribaData.items[index];
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

  getPhotoUrl(id: number) {
    return environment.photoUrl + id;
  }

  getData() {
    this.crochiuService.getData().subscribe(res => {
      console.log(res);
      this.cribaData = res[0][0];
      if (res[0].length === 0) {
        this.cribaData = new CribaSectionModel();
        this.cribaData.title = '';
        this.cribaData.subtitle = '';
        this.cribaData.items = [];
      }
      else {
        this.cribaData = res[0][0];
      }
      this.cribaData.items = res[1];
    });
  }
  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { CribaSectionModel } from 'src/app/shared/models/criba-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CribaService } from 'src/app/shared/services/criba.service';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-criba',
  templateUrl: './main-criba.component.html',
  styleUrls: ['./main-criba.component.scss']
})
export class MainCribaComponent implements OnInit {
  cribaData: CribaSectionModel;
  currentItem: PortfolioItemModel;
  closeResult: string;
  constructor(private modalService: NgbModal, private architectService: CribaService) {
    this.getData();
  }

  open(content: any, index: any) {
    this.currentItem = this.cribaData.items[index];
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

  getPhotoUrl(id: number) {
    return environment.photoUrl + id;
  }

  getData() {
    this.architectService.getData().subscribe(res => {
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

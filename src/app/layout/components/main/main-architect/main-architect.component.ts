import { Component, OnInit } from '@angular/core';
import { ArhitectSectionModel } from 'src/app/shared/models/arhitect.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArhitectService } from 'src/app/shared/services/arhitect.service';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-architect',
  templateUrl: './main-architect.component.html',
  styleUrls: ['./main-architect.component.scss']
})
export class MainArchitectComponent implements OnInit {
  arhitectData: ArhitectSectionModel;
  currentItem: PortfolioItemModel;
  closeResult: string;
  constructor(private modalService: NgbModal, private architectService: ArhitectService) {
    this.getData();
  }

  open(content: any, index: any) {
    this.currentItem = this.arhitectData.items[index];
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
    this.architectService.getData().subscribe(res => {
      console.log(res);
      this.arhitectData = res[0][0];
      if (res[0].length === 0) {
        this.arhitectData = new ArhitectSectionModel();
        this.arhitectData.title = '';
        this.arhitectData.subtitle = '';
        this.arhitectData.items = [];
      }
      else {
        this.arhitectData = res[0][0];
      }
      this.arhitectData.items = res[1];
    });
  }
  ngOnInit(): void {
  }

}

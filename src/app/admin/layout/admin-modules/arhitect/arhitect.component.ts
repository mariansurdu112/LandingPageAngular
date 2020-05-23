import { Component, OnInit } from '@angular/core';
import { CercetatorSectionModel } from 'src/app/shared/models/cercetator-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceItem } from 'src/app/shared/models/service-item.model';
import { ArhitectSectionModel } from 'src/app/shared/models/arhitect.model';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';

@Component({
  selector: 'app-arhitect',
  templateUrl: './arhitect.component.html',
  styleUrls: ['./arhitect.component.scss']
})
export class ArhitectComponent implements OnInit {
  currentSelectedItem: PortfolioItemModel;
  arhitectData: ArhitectSectionModel = {
    title: 'Arhitect', subtitle: 'something', items: [
      { title: 'title', subtitle: 'main desc', photo: 'assets/img/portfolio/01-thumbnail.jpg', description: 'xxx', date: new Date() },
      { title: 'title', subtitle: 'main desc', photo: 'assets/img/portfolio/01-thumbnail.jpg', description: 'xxx', date: new Date() },
      { title: 'title', subtitle: 'main desc', photo: 'assets/img/portfolio/01-thumbnail.jpg', description: 'xxx', date: new Date() },
      { title: 'title', subtitle: 'main desc', photo: 'assets/img/portfolio/01-thumbnail.jpg', description: 'xxx', date: new Date() }
    ]
  };
  arhitectForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  arhitectItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });
  closeResult: string;
  constructor(private modalService: NgbModal) {

  }
  ngOnInit(): void {

  }

  open(content: any, item?: any) {
    if (item) {
      this.currentSelectedItem = item;
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
    this.arhitectData.title = data.mainTitle;
    this.arhitectData.subtitle = data.subTitle;
  }

  saveArhitectItem(data: PortfolioItemModel) {
    console.log(data);
    this.arhitectData.items.push(data);
  }


}

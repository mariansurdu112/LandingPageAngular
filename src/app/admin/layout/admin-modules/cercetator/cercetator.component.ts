import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CercetatorSectionModel } from 'src/app/shared/models/cercetator-section.model';
import { ServiceItem } from 'src/app/shared/models/service-item.model';

@Component({
  selector: 'app-cercetator',
  templateUrl: './cercetator.component.html',
  styleUrls: ['./cercetator.component.scss']
})
export class CercetatorComponent implements OnInit {

  cercetatorData: CercetatorSectionModel = {
    title: 'Profesor', subtitle: 'Subtitle', items: [
      { title: 'title', mainDescription: 'main desc', icon: 'fa-laptop' },
      { title: 'title', mainDescription: 'main desc', icon: 'something' },
      { title: 'title', mainDescription: 'main desc', icon: 'something' },
      { title: 'title', mainDescription: 'main desc', icon: 'something' }
    ]
  };
  cercetatorForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  cercetatorItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required)
  });
  closeResult: string;
  constructor(private modalService: NgbModal) {

  }
  ngOnInit(): void {

  }

  open(content: any) {
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
    this.cercetatorData.title = data.mainTitle;
    this.cercetatorData.subtitle = data.subTitle;
  }

  saveStoryPoint(data: ServiceItem) {
    console.log(data);
    this.cercetatorData.items.push(data);
  }

}

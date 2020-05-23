import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  profesorData: ProfesorSectionModel = {
    title: 'Profesor', subtitle: 'Subtitle',
    storyItems: [
      {
        startYear: 1994, id: 1, fullDetails: '',
        photoUrl: 'assets/img/about/5.jpg', title: 'Our humble beggining',
        endYear: 1943, mainDescription: 'main description'
      },
      {
        startYear: 1994, id: 1, fullDetails: '',
        photoUrl: 'assets/img/about/4.jpg', title: 'Our humble beggining',
        endYear: 1943, mainDescription: 'main description'
      },
      {
        startYear: 1994, id: 1, fullDetails: '',
        photoUrl: 'assets/img/about/3.jpg', title: 'Our humble beggining',
        endYear: 1943, mainDescription: 'main description'
      }]
  };
  proffesorForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  storyPointForm = new FormGroup({
    startYear: new FormControl('', Validators.required),
    endYear: new FormControl('', Validators.required),
    fullDetails: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    photoUrl: new FormControl('', Validators.required)
  });
  closeResult: string;
  constructor(private modalService: NgbModal) {

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
    this.profesorData.title = data.mainTitle;
    this.profesorData.subtitle = data.subTitle;
  }

  saveStoryPoint(data: any) {
    console.log(data);
    this.profesorData.storyItems.push(data);
  }


  ngOnInit() { }

}

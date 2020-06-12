import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StoryItemModel } from 'src/app/shared/models/story-item.model';
import { ProfesorService } from 'src/app/shared/services/professor.service';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {
  currentSelectedItem: StoryItemModel;
  currentIndex: number;
  profesorData: ProfesorSectionModel;
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
    photoUrl: new FormControl('', Validators.required),
    professorId: new FormControl(''),
  });

  storyPointFormEdit = new FormGroup({
    id: new FormControl(''),
    startYear: new FormControl('', Validators.required),
    endYear: new FormControl('', Validators.required),
    fullDetails: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    photoUrl: new FormControl('', Validators.required),
    professorId: new FormControl(''),
    rowVersion: new FormControl('')
  });
  closeResult: string;
  constructor(private modalService: NgbModal, private profesorService: ProfesorService) {
    this.getData();
  }
  open(content: any, item?: any, index?: number) {
    if (this.profesorData) {
      this.proffesorForm.setValue({ mainTitle: this.profesorData.title, subTitle: this.profesorData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.storyPointFormEdit.setValue(this.currentSelectedItem);
      this.currentIndex = index;
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
    if (this.profesorData) {
      console.log(this.profesorData);
      this.profesorService.saveEdit({
        Id: this.profesorData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.profesorData.rowVersion
      },
        this.profesorData.id).subscribe(res => {
          console.log(res);
          this.profesorData = res;
        });
    }
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.profesorService.save(dataToSend).subscribe(res => {
        console.log(res);
        this.profesorData = res;
      });
    }
  }

  saveStoryPoint(data: any) {
    console.log(data);
    console.log(this.profesorData);
    data.professorId = this.profesorData.id;
    this.profesorService.saveStoryPointItem(data).subscribe(res => {
      console.log(res);
      if (!this.profesorData.storyItems) {
        this.profesorData.storyItems = [];
      }
      this.profesorData.storyItems.push(res);
      this.storyPointFormEdit.reset();
    });
  }

  saveStoryPointItemEdit(data: StoryItemModel) {
    this.profesorData.storyItems[this.currentIndex] = data;
    this.profesorService.saveStoryPointItemEdit(data).subscribe(res => {
      console.log(res);
      this.profesorData = res[0][0];
      this.profesorData.storyItems = res[1];
      this.storyPointFormEdit.setValue(this.profesorData.storyItems[this.currentIndex]);
    });
  }

  removeStoryPointItem(index: number) {
    this.profesorService.removeStoryPointItem(this.profesorData.storyItems[index].id).subscribe(res => {
      this.profesorData.storyItems.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.profesorService.getData().subscribe(res => {
      console.log(res);
      this.profesorData = res[0][0];
      if (!this.profesorData.storyItems){
        this.profesorData.storyItems = [];
      }
      this.profesorData.storyItems = res[1];
    });
  }


  ngOnInit() { }

}

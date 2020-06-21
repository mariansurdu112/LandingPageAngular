import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StoryItemModel } from 'src/app/shared/models/story-item.model';
import { ProfesorService } from 'src/app/shared/services/professor.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {
  currentSelectedItem: StoryItemModel;
  currentIndex: number;
  selectedPhotoId: number;
  currentOperation: number;
  dataOperation: any;
  eventsSubject: Subject<any> = new Subject<any>();
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
    photoId: new FormControl(''),
    professorId: new FormControl(''),
  });

  storyPointFormEdit = new FormGroup({
    id: new FormControl(''),
    startYear: new FormControl('', Validators.required),
    endYear: new FormControl('', Validators.required),
    fullDetails: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    photoId: new FormControl(''),
    professorId: new FormControl(''),
    rowVersion: new FormControl('')
  });
  closeResult: string;
  constructor(private modalService: NgbModal, private professorService: ProfesorService) {
    this.getData();
  }
  public events: string[] = [];
  public editorValueAdd: string;
  public editorValueEdit: string;

  public valueChange(arg: any, operation: number): void {
    if (operation === 1) {
      this.storyPointForm.controls.fullDetails.setValue(`${arg || ''}`);
    } else {
      this.storyPointFormEdit.controls.fullDetails.setValue(`${arg || ''}`);
    }
  }

  open(content: any, item?: any, index?: number) {
    if (this.profesorData) {
      this.proffesorForm.setValue({ mainTitle: this.profesorData.title, subTitle: this.profesorData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.storyPointFormEdit.setValue(this.currentSelectedItem);
      this.editorValueEdit = this.currentSelectedItem.fullDetails;
      this.currentIndex = index;
    }
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

  public uploadFinished = (event: any) => {
    if (event !== 0) {
      this.selectedPhotoId = event.photoId;
      this.dataOperation.photoId = this.selectedPhotoId;
    }
    else {
      this.dataOperation.photoId = this.profesorData.storyItems[this.currentIndex].photoId;
    }
    if (this.currentOperation === 1) {
      this.dataOperation.professorId = this.profesorData.id;
      this.professorService.saveStoryPointItem(this.dataOperation).subscribe(res => {
        console.log(res);
        if (!this.profesorData.storyItems) {
          this.profesorData.storyItems = [];
        }
        this.profesorData.storyItems.push(res);
        this.storyPointForm.reset();
      });
    }
    else {
      this.professorService.saveStoryPointItemEdit(this.dataOperation).subscribe(res => {
        console.log(res);
        this.profesorData = res[0][0];
        this.profesorData.storyItems = res[1];
        this.storyPointFormEdit.setValue(this.profesorData.storyItems[this.currentIndex]);
      });
    }
  }

  save(data: any) {
    if (this.profesorData.id) {
      this.professorService.saveEdit({
        Id: this.profesorData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.profesorData.rowVersion
      },
        this.profesorData.id).subscribe(res => {
          this.profesorData = res[0][0];
          if (res[0].length === 0) {
            this.profesorData = new ProfesorSectionModel();
            this.profesorData.title = '';
            this.profesorData.subtitle = '';
            this.profesorData.storyItems = [];
          }
          else {
            this.profesorData = res[0][0];
          }
          this.profesorData.storyItems = res[1];
        });
    }
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.professorService.save(dataToSend).subscribe(res => {
        console.log(res);
        this.profesorData = res[0][0];
        if (res[0].length === 0) {
          this.profesorData = new ProfesorSectionModel();
          this.profesorData.title = '';
          this.profesorData.subtitle = '';
          this.profesorData.storyItems = [];
        }
        else {
          this.profesorData = res[0][0];
        }
        this.profesorData.storyItems = res[1];
      });
    }
  }

  saveStoryPoint(data: any) {
    this.currentOperation = 1;
    this.dataOperation = data;
    this.eventsSubject.next();
  }

  saveStoryPointItemEdit(data: StoryItemModel) {
    this.currentOperation = 2;
    this.dataOperation = data;
    this.eventsSubject.next();
  }

  removeStoryPointItem(index: number) {
    this.professorService.removeStoryPointItem(this.profesorData.storyItems[index].id).subscribe(res => {
      this.profesorData.storyItems.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.professorService.getData().subscribe(res => {
      console.log(res);
      this.profesorData = res[0][0];
      if (res[0].length === 0) {
        this.profesorData = new ProfesorSectionModel();
        this.profesorData.title = '';
        this.profesorData.subtitle = '';
        this.profesorData.storyItems = [];
      }
      else {
        this.profesorData = res[0][0];
      }
      this.profesorData.storyItems = res[1];
    });
  }

  getPhotoUrl(id: number) {
    return environment.photoUrl + id;
  }


  ngOnInit() { }

}

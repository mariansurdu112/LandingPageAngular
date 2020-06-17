import { Component, OnInit } from '@angular/core';
import { CribaService } from 'src/app/shared/services/criba.service';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { environment } from 'src/environments/environment';
import { CribaSectionModel } from 'src/app/shared/models/criba-section.model';

@Component({
  selector: 'app-criba',
  templateUrl: './criba.component.html',
  styleUrls: ['./criba.component.scss']
})
export class CribaComponent implements OnInit {
  currentSelectedItem: PortfolioItemModel;
  currentIndex: number;
  selectedPhotoId: number;
  currentOperation: number;
  dataOperation: any;
  eventsSubject: Subject<any> = new Subject<any>();

  cribaData: CribaSectionModel;
  cribaForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  cribaItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photoId: new FormControl(''),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    cribaId: new FormControl('')
  });
  cribaItemsFormEdit = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photoId: new FormControl(''),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    cribaId: new FormControl(''),
    id: new FormControl(''),
    rowVersion: new FormControl('')

  });
  closeResult: string;
  constructor(private modalService: NgbModal, private cribaService: CribaService, private photoService: PhotoService) {
    this.getData();
  }
  public editorValueAdd: string;
  public editorValueEdit: string;

  public valueChange(arg: any, operation: number): void {
    if (operation === 1) {
      this.cribaItemsForm.controls.description.setValue(`${arg || ''}`);
    } else {
      this.cribaItemsFormEdit.controls.description.setValue(`${arg || ''}`);
    }
  }
  open(content: any, item?: any, index?: number) {
    if (this.cribaData) {
      console.log(this.cribaData);
      this.cribaForm.setValue({ mainTitle: this.cribaData.title, subTitle: this.cribaData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.editorValueEdit = this.currentSelectedItem.description;
      this.cribaItemsFormEdit.setValue(this.currentSelectedItem);
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

  getPhotoUrl(id: number) {
    return environment.photoUrl + id;
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
    console.log('Upload photo finished');
    if (event !== 0) {
      this.selectedPhotoId = event.photoId;
      this.dataOperation.photoId = this.selectedPhotoId;
    }
    else{
      this.dataOperation.photoId = this.cribaData.items[this.currentIndex].photoId;
    }
    this.dataOperation.cribaId = this.cribaData.id;
    if (this.currentOperation === 1) {

      console.log(this.dataOperation);
      this.cribaService.saveItem(this.dataOperation).subscribe(res => {
        console.log(res);
        if (!this.cribaData.items) {
          this.cribaData.items = [];
        }
        this.cribaData.items.push(res);
        this.cribaItemsForm.reset();
      });
    }
    else {
      this.cribaService.saveItemEdit(this.dataOperation).subscribe(res => {
        this.cribaData = res[0][0];
        this.cribaData.items = res[1];
        this.cribaItemsFormEdit.setValue(this.cribaData.items[this.currentIndex]);
      });
    }
  }

  save(data: any) {
    if (this.cribaData.id) {
      this.cribaService.saveEdit({
        Id: this.cribaData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.cribaData.rowVersion
      },
        this.cribaData.id).subscribe(res => {
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
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.cribaService.save(dataToSend).subscribe(res => {
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
  }

  saveCribaItem(data: any) {
    this.currentOperation = 1;
    this.dataOperation = data;
    this.eventsSubject.next();

  }

  saveCribaItemEdit(data: PortfolioItemModel) {
    this.currentOperation = 2;
    this.dataOperation = data;
    this.eventsSubject.next();

  }

  remove(index: number) {
    this.cribaService.removeItem(this.cribaData.items[index].id).subscribe(res => {
      this.cribaData.items.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.cribaService.getData().subscribe(res => {
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


  ngOnInit() { }

}

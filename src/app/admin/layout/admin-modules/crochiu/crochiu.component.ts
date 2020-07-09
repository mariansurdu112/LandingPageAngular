import { Component, OnInit } from '@angular/core';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import { Subject } from 'rxjs';
import { CribaSectionModel } from 'src/app/shared/models/criba-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { environment } from 'src/environments/environment';
import { CrochiuService } from 'src/app/shared/services/crochiu.service';

@Component({
  selector: 'app-crochiu',
  templateUrl: './crochiu.component.html',
  styleUrls: ['./crochiu.component.scss']
})
export class CrochiuComponent implements OnInit {

  currentSelectedItem: PortfolioItemModel;
  currentIndex: number;
  selectedPhotoId: number;
  currentOperation: number;
  dataOperation: any;
  eventsSubject: Subject<any> = new Subject<any>();
  photos: any;
  crochiuData: CribaSectionModel;
  crochiuForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  crochiuItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photoId: new FormControl(''),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    crochiuId: new FormControl(''),
    photos: new FormControl('')
  });
  crochiuItemsFormEdit = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photoId: new FormControl(''),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    crochiuId: new FormControl(''),
    id: new FormControl(''),
    rowVersion: new FormControl(''),
    photos: new FormControl('')

  });
  closeResult: string;
  constructor(private modalService: NgbModal, private crochiuService: CrochiuService, private photoService: PhotoService) {
    this.getData();
  }
  public editorValueAdd: string;
  public editorValueEdit: string;

  public valueChange(arg: any, operation: number): void {
    if (operation === 1) {
      this.crochiuItemsForm.controls.description.setValue(`${arg || ''}`);
    } else {
      this.crochiuItemsFormEdit.controls.description.setValue(`${arg || ''}`);
    }
  }
  open(content: any, item?: any, index?: number) {
    if (this.crochiuData) {
      console.log(this.crochiuData);
      this.crochiuForm.setValue({ mainTitle: this.crochiuData.title, subTitle: this.crochiuData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.editorValueEdit = this.currentSelectedItem.description;
      this.crochiuItemsFormEdit.setValue(this.currentSelectedItem);
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
    else {
      this.dataOperation.photoId = this.crochiuData.items[this.currentIndex].photoId;
    }
    this.dataOperation.crochiuId = this.crochiuData.id;
    if (this.currentOperation === 1) {

      console.log(this.dataOperation);
      this.crochiuService.saveItem(this.dataOperation).subscribe(res => {
        console.log(res);
        if (!this.crochiuData.items) {
          this.crochiuData.items = [];
        }
        this.crochiuData.items.push(res);
        this.crochiuItemsForm.reset();
      });
    }
    else {
      this.crochiuService.saveItemEdit(this.dataOperation).subscribe(res => {
        this.crochiuData = res[0][0];
        this.crochiuData.items = res[1];
        this.crochiuItemsFormEdit.setValue(this.crochiuData.items[this.currentIndex]);
      });
    }
  }

  save(data: any) {
    if (this.crochiuData.id) {
      this.crochiuService.saveEdit({
        Id: this.crochiuData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.crochiuData.rowVersion
      },
        this.crochiuData.id).subscribe(res => {
          this.crochiuData = res[0][0];
          if (res[0].length === 0) {
            this.crochiuData = new CribaSectionModel();
            this.crochiuData.title = '';
            this.crochiuData.subtitle = '';
            this.crochiuData.items = [];
          }
          else {
            this.crochiuData = res[0][0];
          }
          this.crochiuData.items = res[1];
        });
    }
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.crochiuService.save(dataToSend).subscribe(res => {
        console.log(res);
        this.crochiuData = res[0][0];
        if (res[0].length === 0) {
          this.crochiuData = new CribaSectionModel();
          this.crochiuData.title = '';
          this.crochiuData.subtitle = '';
          this.crochiuData.items = [];
        }
        else {
          this.crochiuData = res[0][0];
        }
        this.crochiuData.items = res[1];
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
    this.crochiuService.removeItem(this.crochiuData.items[index].id).subscribe(res => {
      this.crochiuData.items.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.crochiuService.getData().subscribe(res => {
      console.log(res);
      this.crochiuData = res[0][0];
      if (res[0].length === 0) {
        this.crochiuData = new CribaSectionModel();
        this.crochiuData.title = '';
        this.crochiuData.subtitle = '';
        this.crochiuData.items = [];
      }
      else {
        this.crochiuData = res[0][0];
      }
      this.crochiuData.items = res[1];
    });
  }


  ngOnInit() { }

}

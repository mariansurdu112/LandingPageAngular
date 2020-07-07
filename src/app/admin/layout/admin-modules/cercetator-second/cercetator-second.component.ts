import { Component, OnInit } from '@angular/core';
import { StoryItemModel } from 'src/app/shared/models/story-item.model';
import { CercetatorSectionModel } from 'src/app/shared/models/cercetator-section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CercetatorSecondService } from 'src/app/shared/services/cercetator-second.service';

@Component({
  selector: 'app-cercetator-second',
  templateUrl: './cercetator-second.component.html',
  styleUrls: ['./cercetator-second.component.scss']
})
export class CercetatorSecondComponent implements OnInit {
  currentSelectedItem: StoryItemModel;
  currentIndex: number;
  cercetatorData: CercetatorSectionModel;
  cercetatorForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  cercetatorItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    fullDetails: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required)
  });

  cercetatorItemsFormEdit = new FormGroup({
    id: new FormControl(''),
    rowVersion: new FormControl(''),
    title: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    fullDetails: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
    cercetatorId: new FormControl('')
  });
  closeResult: string;
  constructor(private modalService: NgbModal, private cercetatorService: CercetatorSecondService) {
    this.getData();
  }
  public editorValueAdd: string;
  public editorValueEdit: string;

  public valueChange(arg: any, operation: number): void {
    if (operation === 1) {
      this.cercetatorItemsForm.controls.fullDetails.setValue(`${arg || ''}`);
    } else {
      this.cercetatorItemsFormEdit.controls.fullDetails.setValue(`${arg || ''}`);
    }
  }
  open(content: any, item?: any, index?: number) {
    if (this.cercetatorData) {
      this.cercetatorForm.setValue({ mainTitle: this.cercetatorData.title, subTitle: this.cercetatorData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.editorValueEdit = this.currentSelectedItem.fullDetails;
      this.cercetatorItemsFormEdit.setValue(this.currentSelectedItem);
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

  save(data: any) {
    console.log('x');
    if (this.cercetatorData.id) {
      this.cercetatorService.saveEdit({
        Id: this.cercetatorData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.cercetatorData.rowVersion
      },
        this.cercetatorData.id).subscribe(res => {
          this.cercetatorData = res[0][0];
          if (res[0].length === 0) {
            this.cercetatorData = new CercetatorSectionModel();
            this.cercetatorData.title = '';
            this.cercetatorData.subtitle = '';
            this.cercetatorData.items = [];
          }
          else {
            this.cercetatorData = res[0][0];
          }
          this.cercetatorData.items = res[1];
        });
    }
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.cercetatorService.save(dataToSend).subscribe(res => {
        console.log(res);
        this.cercetatorData = res[0][0];
        if (res[0].length === 0) {
          this.cercetatorData = new CercetatorSectionModel();
          this.cercetatorData.title = '';
          this.cercetatorData.subtitle = '';
          this.cercetatorData.items = [];
        }
        else {
          this.cercetatorData = res[0][0];
        }
        this.cercetatorData.items = res[1];
      });
    }
  }

  saveItem(data: any) {
    console.log(data);
    console.log(this.cercetatorData);
    data.cercetatorId = this.cercetatorData.id;
    this.cercetatorService.saveItem(data).subscribe(res => {
      console.log(res);
      if (!this.cercetatorData.items) {
        this.cercetatorData.items = [];
      }
      this.cercetatorData.items.push(res);
      this.cercetatorItemsFormEdit.reset();
    });
  }

  saveItemEdit(data: StoryItemModel) {
    this.cercetatorService.saveItemEdit(data).subscribe(res => {
      console.log(res);
      this.cercetatorData = res[0][0];
      this.cercetatorData.items = res[1];
      this.cercetatorItemsFormEdit.setValue(this.cercetatorData.items[this.currentIndex]);
    });
  }

  removeItem(index: number) {
    this.cercetatorService.removeItem(this.cercetatorData.items[index].id).subscribe(res => {
      this.cercetatorData.items.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.cercetatorService.getData().subscribe(res => {
      console.log(res);
      this.cercetatorData = res[0][0];
      if (res[0].length === 0) {
        this.cercetatorData = new CercetatorSectionModel();
        this.cercetatorData.title = '';
        this.cercetatorData.subtitle = '';
        this.cercetatorData.items = [];
      }
      else {
        this.cercetatorData = res[0][0];
      }
      this.cercetatorData.items = res[1];
    });
  }


  ngOnInit() { }

}

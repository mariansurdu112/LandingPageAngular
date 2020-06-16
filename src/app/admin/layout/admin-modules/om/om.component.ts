import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OmSectionModel } from 'src/app/shared/models/om-section.model';
import { StoryItemModel } from 'src/app/shared/models/story-item.model';
import { OmService } from 'src/app/shared/services/om.service';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss']
})
export class OmComponent implements OnInit {
  currentSelectedItem: StoryItemModel;
  currentIndex: number;
  omData: OmSectionModel;
  omForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  omItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required)
  });

  omItemsFormEdit = new FormGroup({
    id: new FormControl(''),
    rowVersion: new FormControl(''),
    title: new FormControl('', Validators.required),
    mainDescription: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
    omId: new FormControl('')
  });
  closeResult: string;
  constructor(private modalService: NgbModal, private omService: OmService) {
    this.getData();
  }
  open(content: any, item?: any, index?: number) {
    if (this.omData) {
      this.omForm.setValue({ mainTitle: this.omData.title, subTitle: this.omData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.omItemsFormEdit.setValue(this.currentSelectedItem);
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
    console.log('x');
    if (this.omData.id) {
      this.omService.saveEdit({
        Id: this.omData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.omData.rowVersion
      },
        this.omData.id).subscribe(res => {
          this.omData = res[0][0];
          if (res[0].length === 0) {
            this.omData = new OmSectionModel();
            this.omData.title = '';
            this.omData.subtitle = '';
            this.omData.items = [];
          }
          else {
            this.omData = res[0][0];
          }
          this.omData.items = res[1];
        });
    }
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.omService.save(dataToSend).subscribe(res => {
        console.log(res);
        this.omData = res[0][0];
        if (res[0].length === 0) {
          this.omData = new OmSectionModel();
          this.omData.title = '';
          this.omData.subtitle = '';
          this.omData.items = [];
        }
        else {
          this.omData = res[0][0];
        }
        this.omData.items = res[1];
      });
    }
  }

  saveItem(data: any) {
    console.log(data);
    console.log(this.omData);
    data.omId = this.omData.id;
    this.omService.saveItem(data).subscribe(res => {
      console.log(res);
      if (!this.omData.items) {
        this.omData.items = [];
      }
      this.omData.items.push(res);
      this.omItemsFormEdit.reset();
    });
  }

  saveItemEdit(data: StoryItemModel) {
    this.omService.saveItemEdit(data).subscribe(res => {
      console.log(res);
      this.omData = res[0][0];
      this.omData.items = res[1];
      this.omItemsFormEdit.setValue(this.omData.items[this.currentIndex]);
    });
  }

  removeItem(index: number) {
    this.omService.removeItem(this.omData.items[index].id).subscribe(res => {
      this.omData.items.splice(index, 1);
      console.log(res);
    });
  }

  getData() {
    this.omService.getData().subscribe(res => {
      console.log(res);
      this.omData = res[0][0];
      if (res[0].length === 0) {
        this.omData = new OmSectionModel();
        this.omData.title = '';
        this.omData.subtitle = '';
        this.omData.items = [];
      }
      else {
        this.omData = res[0][0];
      }
      this.omData.items = res[1];
    });
  }


  ngOnInit() { }

}

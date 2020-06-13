import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArhitectSectionModel } from 'src/app/shared/models/arhitect.model';
import { PortfolioItemModel } from 'src/app/shared/models/portfolio-item.model';
import {ArhitectService} from 'src/app/shared/services/arhitect.service';
@Component({
  selector: 'app-arhitect',
  templateUrl: './arhitect.component.html',
  styleUrls: ['./arhitect.component.scss']
})
export class ArhitectComponent implements OnInit {
  currentSelectedItem: PortfolioItemModel;
  currentIndex: number;
  arhitectData: ArhitectSectionModel;
  arhitectForm = new FormGroup({
    mainTitle: new FormControl('', Validators.required),
    subTitle: new FormControl('', Validators.required),
  });
  arhitectItemsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    architectId: new FormControl('')
  });
  arhitectItemsFormEdit = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    architectId: new FormControl(''),
    id: new FormControl(''),
    rowVersion: new FormControl('')

  });
  closeResult: string;
  constructor(private modalService: NgbModal, private architectService: ArhitectService) {
    this.getData();
  }
  open(content: any, item?: any, index?: number) {
    if (this.arhitectData) {
      console.log(this.arhitectData);
      this.arhitectForm.setValue({ mainTitle: this.arhitectData.title, subTitle: this.arhitectData.subtitle });
    }

    if (item) {
      this.currentSelectedItem = item;
      this.arhitectItemsFormEdit.setValue(this.currentSelectedItem);
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
    if (this.arhitectData.id) {
      this.architectService.saveEdit({
        Id: this.arhitectData.id, Title: data.mainTitle, Subtitle: data.subTitle,
        RowVersion: this.arhitectData.rowVersion
      },
        this.arhitectData.id).subscribe(res => {
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
    else {
      const dataToSend = { Title: data.mainTitle, Subtitle: data.subTitle };
      this.architectService.save(dataToSend).subscribe(res => {
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
  }

  saveArhitectItem(data: any) {
    console.log(data);
    console.log(this.arhitectData);
    data.architectId = this.arhitectData.id;
    this.architectService.saveItem(data).subscribe(res => {
      console.log(res);
      if (!this.arhitectData.items) {
        this.arhitectData.items = [];
      }
      this.arhitectData.items.push(res);
      this.arhitectItemsForm.reset();
    });
  }

  saveArhitectItemEdit(data: PortfolioItemModel) {
    this.architectService.saveItemEdit(data).subscribe(res => {
      console.log(res);
      this.arhitectData = res[0][0];
      this.arhitectData.items = res[1];
      this.arhitectItemsFormEdit.setValue(this.arhitectData.items[this.currentIndex]);
    });
  }

  remove(index: number) {
    this.architectService.removeItem(this.arhitectData.items[index].id).subscribe(res => {
      this.arhitectData.items.splice(index, 1);
      console.log(res);
    });
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


  ngOnInit() { }

}

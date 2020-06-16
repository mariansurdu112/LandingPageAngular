import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ContactSectionModel } from 'src/app/shared/models/contact-section.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactData: ContactSectionModel;
  contactForm = new FormGroup({
    email: new FormControl('', Validators.required)
  });
  closeResult: string;
  constructor(private modalService: NgbModal, private contactService: ContactService) {
    this.getData();
  }
  ngOnInit(): void {

  }
  editSection(content: any) {
    if (this.contactData) {
      this.contactForm.setValue({
        email: this.contactData.email
      });
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
    if (!this.contactData) {
      this.contactService.save(data).subscribe((res) => {
        this.contactData = data;
        console.log(res);
      });
    }
    else {
      this.contactData.email = data.email;
      this.contactService.saveEdit(this.contactData, this.contactData.id).subscribe((res) => {
        console.log(res);
      });
    }

  }

  getData() {
    this.contactService.getData().subscribe((res) => {
      console.log(res);
      this.contactData = res[0];
    });
  }

}

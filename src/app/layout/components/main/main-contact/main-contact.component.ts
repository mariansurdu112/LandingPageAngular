import { Component, OnInit } from '@angular/core';
import { ContactSectionModel } from 'src/app/shared/models/contact-section.model';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {
  contactData: ContactSectionModel;
  closeResult: string;
  constructor(private contactService: ContactService) {
    this.getData();
  }
  ngOnInit(): void {

  }
  getData() {
    this.contactService.getData().subscribe((res) => {
      console.log(res);
      this.contactData = res[0];
    });
  }

}

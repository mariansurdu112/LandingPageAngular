import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

}

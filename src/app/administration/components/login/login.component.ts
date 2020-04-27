import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Loaded');
  }

}

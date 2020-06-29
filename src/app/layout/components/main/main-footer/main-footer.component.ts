import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  timeout: any;
  displayData = false;
  constructor() {
    this.timeout = setTimeout(() => {
      this.displayData = true;
      clearTimeout(this.timeout);
    }, 2000);
  }

  ngOnInit(): void {
  }

}

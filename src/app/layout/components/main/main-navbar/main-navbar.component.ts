import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public loadScript() {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/js/agency.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    this.loadScript();
  }

}

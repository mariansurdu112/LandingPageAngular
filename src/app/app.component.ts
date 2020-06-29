import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cristina Olga Gociman';
  constructor(private metaService: Meta) {
    this.metaService.addTags([
      { name: 'keywords', content: 'Cristina Olga Gociman, Gociman, Criba, Arhitect, Bucuresti,Bucharest, Architect' },
      { name: 'description', content: 'Architect page' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

}

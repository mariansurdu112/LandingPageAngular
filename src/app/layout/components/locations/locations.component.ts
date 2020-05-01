import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;
  constructor() { }

  ngOnInit(): void {
  }

}

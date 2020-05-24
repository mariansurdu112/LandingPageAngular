import { Component, OnInit } from '@angular/core';
import { OmService } from 'src/app/shared/services/om.service';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss']
})
export class OmComponent implements OnInit {

  constructor(private omService: OmService) { }

  ngOnInit(): void {
  }

}

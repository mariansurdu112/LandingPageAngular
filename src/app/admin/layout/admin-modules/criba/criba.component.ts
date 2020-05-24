import { Component, OnInit } from '@angular/core';
import { CribaService } from 'src/app/shared/services/criba.service';

@Component({
  selector: 'app-criba',
  templateUrl: './criba.component.html',
  styleUrls: ['./criba.component.scss']
})
export class CribaComponent implements OnInit {

  constructor(private cribaService: CribaService) { }

  ngOnInit(): void {
  }

}

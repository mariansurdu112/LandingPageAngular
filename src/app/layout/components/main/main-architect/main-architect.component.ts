import { Component, OnInit } from '@angular/core';
import { ArhitectSectionModel } from 'src/app/shared/models/arhitect.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArhitectService } from 'src/app/shared/services/arhitect.service';

@Component({
  selector: 'app-main-architect',
  templateUrl: './main-architect.component.html',
  styleUrls: ['./main-architect.component.scss']
})
export class MainArchitectComponent implements OnInit {
  arhitectData: ArhitectSectionModel;
  constructor(private modalService: NgbModal, private architectService: ArhitectService) {
    this.getData();
  }

  getData() {
    this.architectService.getData().subscribe(res => {
      console.log(res);
      this.arhitectData = res[0][0];
      if (res[0].length === 0) {
        this.arhitectData = new ArhitectSectionModel();
        this.arhitectData.title = '';
        this.arhitectData.subtitle = '';
        this.arhitectData.items = [];
      }
      else {
        this.arhitectData = res[0][0];
      }
      this.arhitectData.items = res[1];
    });
  }
  ngOnInit(): void {
  }

}

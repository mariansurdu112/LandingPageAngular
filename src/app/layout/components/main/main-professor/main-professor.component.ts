import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { ProfesorService } from 'src/app/shared/services/professor.service';

@Component({
  selector: 'app-main-professor',
  templateUrl: './main-professor.component.html',
  styleUrls: ['./main-professor.component.scss']
})
export class MainProfessorComponent implements OnInit {
  profesorData: ProfesorSectionModel;
  constructor(private professorService: ProfesorService) {
    this.getData();
  }
  getData() {
    this.professorService.getData().subscribe(res => {
      console.log(res);
      this.profesorData = res[0][0];
      if (res[0].length === 0) {
        this.profesorData = new ProfesorSectionModel();
        this.profesorData.title = '';
        this.profesorData.subtitle = '';
        this.profesorData.storyItems = [];
      }
      else {
        this.profesorData = res[0][0];
      }
      this.profesorData.storyItems = res[1];
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProfesorSectionModel } from 'src/app/shared/models/professor-section.model';
import { ProfesorService } from 'src/app/shared/services/professor.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StoryItemModel } from 'src/app/shared/models/story-item.model';

@Component({
  selector: 'app-main-professor',
  templateUrl: './main-professor.component.html',
  styleUrls: ['./main-professor.component.scss']
})
export class MainProfessorComponent implements OnInit {
  profesorData: ProfesorSectionModel;
  currentStoryItem: StoryItemModel;
  closeResult: string;
  constructor(private modalService: NgbModal, private professorService: ProfesorService) {
    this.getData();
  }

  open(content: any, index: number) {
    this.currentStoryItem = this.profesorData.storyItems[index];
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

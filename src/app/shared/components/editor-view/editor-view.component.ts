import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.scss']
})
export class EditorViewComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit(): void {
  }

}

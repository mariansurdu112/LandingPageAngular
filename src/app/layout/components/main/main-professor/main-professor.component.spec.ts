import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfessorComponent } from './main-professor.component';

describe('MainProfessorComponent', () => {
  let component: MainProfessorComponent;
  let fixture: ComponentFixture<MainProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

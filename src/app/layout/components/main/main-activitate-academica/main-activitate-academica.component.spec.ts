import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActivitateAcademicaComponent } from './main-activitate-academica.component';

describe('MainActivitateAcademicaComponent', () => {
  let component: MainActivitateAcademicaComponent;
  let fixture: ComponentFixture<MainActivitateAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainActivitateAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActivitateAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

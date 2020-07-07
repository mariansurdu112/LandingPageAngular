import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorSecondComponent } from './profesor-second.component';

describe('ProfesorSecondComponent', () => {
  let component: ProfesorSecondComponent;
  let fixture: ComponentFixture<ProfesorSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

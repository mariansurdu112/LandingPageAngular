import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCribaComponent } from './main-criba.component';

describe('MainCribaComponent', () => {
  let component: MainCribaComponent;
  let fixture: ComponentFixture<MainCribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

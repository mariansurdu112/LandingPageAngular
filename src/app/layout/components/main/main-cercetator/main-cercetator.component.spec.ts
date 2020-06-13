import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCercetatorComponent } from './main-cercetator.component';

describe('MainCercetatorComponent', () => {
  let component: MainCercetatorComponent;
  let fixture: ComponentFixture<MainCercetatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCercetatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCercetatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

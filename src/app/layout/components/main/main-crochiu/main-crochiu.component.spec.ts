import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrochiuComponent } from './main-crochiu.component';

describe('MainCrochiuComponent', () => {
  let component: MainCrochiuComponent;
  let fixture: ComponentFixture<MainCrochiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCrochiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCrochiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActivitatePublicataComponent } from './main-activitate-publicata.component';

describe('MainActivitatePublicataComponent', () => {
  let component: MainActivitatePublicataComponent;
  let fixture: ComponentFixture<MainActivitatePublicataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainActivitatePublicataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActivitatePublicataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

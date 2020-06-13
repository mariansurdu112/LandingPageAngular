import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArchitectComponent } from './main-architect.component';

describe('MainArchitectComponent', () => {
  let component: MainArchitectComponent;
  let fixture: ComponentFixture<MainArchitectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainArchitectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

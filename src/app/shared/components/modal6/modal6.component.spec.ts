import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal6Component } from './modal6.component';

describe('Modal6Component', () => {
  let component: Modal6Component;
  let fixture: ComponentFixture<Modal6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

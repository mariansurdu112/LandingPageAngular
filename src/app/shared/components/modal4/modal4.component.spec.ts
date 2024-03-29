import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal4Component } from './modal4.component';

describe('Modal4Component', () => {
  let component: Modal4Component;
  let fixture: ComponentFixture<Modal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

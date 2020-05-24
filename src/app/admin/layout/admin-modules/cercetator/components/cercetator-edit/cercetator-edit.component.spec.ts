import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercetatorEditComponent } from './cercetator-edit.component';

describe('CercetatorEditComponent', () => {
  let component: CercetatorEditComponent;
  let fixture: ComponentFixture<CercetatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercetatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercetatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

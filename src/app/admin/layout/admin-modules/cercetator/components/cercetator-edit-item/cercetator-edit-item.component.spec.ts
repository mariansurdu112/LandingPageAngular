import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercetatorEditItemComponent } from './cercetator-edit-item.component';

describe('CercetatorEditItemComponent', () => {
  let component: CercetatorEditItemComponent;
  let fixture: ComponentFixture<CercetatorEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercetatorEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercetatorEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

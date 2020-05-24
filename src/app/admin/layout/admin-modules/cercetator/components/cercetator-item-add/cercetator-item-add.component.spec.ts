import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercetatorItemAddComponent } from './cercetator-item-add.component';

describe('CercetatorItemAddComponent', () => {
  let component: CercetatorItemAddComponent;
  let fixture: ComponentFixture<CercetatorItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercetatorItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercetatorItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercetatorComponent } from './cercetator.component';

describe('CercetatorComponent', () => {
  let component: CercetatorComponent;
  let fixture: ComponentFixture<CercetatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercetatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercetatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

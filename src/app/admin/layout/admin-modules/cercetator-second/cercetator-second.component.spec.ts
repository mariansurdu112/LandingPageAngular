import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercetatorSecondComponent } from './cercetator-second.component';

describe('CercetatorSecondComponent', () => {
  let component: CercetatorSecondComponent;
  let fixture: ComponentFixture<CercetatorSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercetatorSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercetatorSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

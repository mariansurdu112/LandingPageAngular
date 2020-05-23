import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribaComponent } from './criba.component';

describe('CribaComponent', () => {
  let component: CribaComponent;
  let fixture: ComponentFixture<CribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPremiiSiDistinctiiComponent } from './main-premii-si-distinctii.component';

describe('PremiiSiDistinctiiComponent', () => {
  let component: MainPremiiSiDistinctiiComponent;
  let fixture: ComponentFixture<MainPremiiSiDistinctiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPremiiSiDistinctiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPremiiSiDistinctiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

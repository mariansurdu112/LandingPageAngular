import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLucrariDeReferintaComponent } from './main-lucrari-de-referinta.component';

describe('LucrariDeReferintaComponent', () => {
  let component: MainLucrariDeReferintaComponent;
  let fixture: ComponentFixture<MainLucrariDeReferintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainLucrariDeReferintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLucrariDeReferintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

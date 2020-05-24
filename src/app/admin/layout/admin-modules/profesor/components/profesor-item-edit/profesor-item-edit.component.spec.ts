import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorItemEditComponent } from './profesor-item-edit.component';

describe('ProfesorItemEditComponent', () => {
  let component: ProfesorItemEditComponent;
  let fixture: ComponentFixture<ProfesorItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

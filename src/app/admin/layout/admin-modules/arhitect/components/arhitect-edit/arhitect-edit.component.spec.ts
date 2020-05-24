import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhitectEditComponent } from './arhitect-edit.component';

describe('ArhitectEditComponent', () => {
  let component: ArhitectEditComponent;
  let fixture: ComponentFixture<ArhitectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhitectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhitectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

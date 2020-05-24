import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhitectEditItemComponent } from './arhitect-edit-item.component';

describe('ArhitectEditItemComponent', () => {
  let component: ArhitectEditItemComponent;
  let fixture: ComponentFixture<ArhitectEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhitectEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhitectEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

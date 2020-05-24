import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhitectAddItemComponent } from './arhitect-add-item.component';

describe('ArhitectAddItemComponent', () => {
  let component: ArhitectAddItemComponent;
  let fixture: ComponentFixture<ArhitectAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhitectAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhitectAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

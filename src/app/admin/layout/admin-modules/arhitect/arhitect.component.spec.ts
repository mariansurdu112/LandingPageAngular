import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhitectComponent } from './arhitect.component';

describe('ArhitectComponent', () => {
  let component: ArhitectComponent;
  let fixture: ComponentFixture<ArhitectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhitectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

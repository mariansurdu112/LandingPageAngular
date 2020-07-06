import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainManagementComponent } from './main-management.component';

describe('ManagementComponent', () => {
  let component: MainManagementComponent;
  let fixture: ComponentFixture<MainManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

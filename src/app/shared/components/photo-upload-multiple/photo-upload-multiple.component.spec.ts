import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadMultipleComponent } from './photo-upload-multiple.component';

describe('PhotoUploadMultipleComponent', () => {
  let component: PhotoUploadMultipleComponent;
  let fixture: ComponentFixture<PhotoUploadMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploadMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploadMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

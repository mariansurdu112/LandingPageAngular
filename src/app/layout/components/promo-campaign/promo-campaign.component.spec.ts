import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCampaignComponent } from './promo-campaign.component';

describe('PromoCampaignComponent', () => {
  let component: PromoCampaignComponent;
  let fixture: ComponentFixture<PromoCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

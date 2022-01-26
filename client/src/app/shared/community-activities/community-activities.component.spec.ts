import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityActivitiesComponent } from './community-activities.component';

describe('CommunityActivitiesComponent', () => {
  let component: CommunityActivitiesComponent;
  let fixture: ComponentFixture<CommunityActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

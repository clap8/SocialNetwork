import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityViewEventComponent } from './community-view-event.component';

describe('CommunityViewEventComponent', () => {
  let component: CommunityViewEventComponent;
  let fixture: ComponentFixture<CommunityViewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityViewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

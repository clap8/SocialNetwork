import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCreateEventComponent } from './community-create-event.component';

describe('CommunityCreateEventComponent', () => {
  let component: CommunityCreateEventComponent;
  let fixture: ComponentFixture<CommunityCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

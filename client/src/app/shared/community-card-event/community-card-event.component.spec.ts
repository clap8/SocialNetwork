import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCardEventComponent } from './community-card-event.component';

describe('CommunityCardEventComponent', () => {
  let component: CommunityCardEventComponent;
  let fixture: ComponentFixture<CommunityCardEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCardEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

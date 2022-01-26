import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMeComponent } from './community-me.component';

describe('CommunityMeComponent', () => {
  let component: CommunityMeComponent;
  let fixture: ComponentFixture<CommunityMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

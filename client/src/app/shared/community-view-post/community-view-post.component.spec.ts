import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityViewPostComponent } from './community-view-post.component';

describe('CommunityViewPostComponent', () => {
  let component: CommunityViewPostComponent;
  let fixture: ComponentFixture<CommunityViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityViewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCardPostComponent } from './community-card-post.component';

describe('CommunityCardPostComponent', () => {
  let component: CommunityCardPostComponent;
  let fixture: ComponentFixture<CommunityCardPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCardPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

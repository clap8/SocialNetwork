import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommunityListComponent } from './my-community-list.component';

describe('MyCommunityListComponent', () => {
  let component: MyCommunityListComponent;
  let fixture: ComponentFixture<MyCommunityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommunityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

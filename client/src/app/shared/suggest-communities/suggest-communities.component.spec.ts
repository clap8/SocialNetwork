import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestCommunitysComponent } from './suggest-communities.component';

describe('SuggestCommunitysComponent', () => {
  let component: SuggestCommunitysComponent;
  let fixture: ComponentFixture<SuggestCommunitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestCommunitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestCommunitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

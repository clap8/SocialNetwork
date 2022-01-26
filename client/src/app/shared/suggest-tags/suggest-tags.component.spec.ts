import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestTagsComponent } from './suggest-tags.component';

describe('SuggestTagsComponent', () => {
  let component: SuggestTagsComponent;
  let fixture: ComponentFixture<SuggestTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

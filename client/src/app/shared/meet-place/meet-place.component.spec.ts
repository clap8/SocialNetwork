import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetPlaceComponent } from './meet-place.component';

describe('MeetPlaceComponent', () => {
  let component: MeetPlaceComponent;
  let fixture: ComponentFixture<MeetPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

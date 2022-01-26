import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetPlaceComponent } from './meet-place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MeetPlaceComponent],
  exports: [MeetPlaceComponent]
})
export class MeetPlaceModule { }

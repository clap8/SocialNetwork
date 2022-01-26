import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserCardComponent } from './user-card.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  declarations: [UserCardComponent],
  exports:[UserCardComponent]
})
export class UserCardModule { }

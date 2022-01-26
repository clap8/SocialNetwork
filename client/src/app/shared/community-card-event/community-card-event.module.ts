import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityCardEventComponent } from './community-card-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommunityCardEventComponent
  ],
  exports: [
    CommunityCardEventComponent
  ]
})
export class CommunityCardEventModule { }

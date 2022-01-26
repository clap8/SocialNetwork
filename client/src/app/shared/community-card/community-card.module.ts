import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommunityCardComponent } from './community-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CommunityCardComponent],
  exports: [CommunityCardComponent]
})
export class CommunityCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityCardPostComponent } from './community-card-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommunityCardPostComponent
  ],
  exports: [
    CommunityCardPostComponent
  ]
})
export class CommunityCardPostModule { }

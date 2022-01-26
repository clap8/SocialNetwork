import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentListModule } from '@shared/comment-list/comment-list.module';
import { CommunityViewEventComponent } from './community-view-event.component';

@NgModule({
  imports: [
    CommonModule,
    CommentListModule
  ],
  declarations: [
    CommunityViewEventComponent
  ],
  exports: [
    CommunityViewEventComponent
  ],
  entryComponents: [
    CommunityViewEventComponent
  ],
})
export class CommunityViewEventModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentListModule } from '@shared/comment-list/comment-list.module';
import { CommunityViewPostComponent } from './community-view-post.component';

@NgModule({
  imports: [
    CommonModule,
    CommentListModule
  ],
  declarations: [
    CommunityViewPostComponent
  ],
  exports: [
    CommunityViewPostComponent
  ],
  entryComponents: [
    CommunityViewPostComponent
  ]
})
export class CommunityViewPostModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { CommentListComponent } from './comment-list.component';

@NgModule({
  imports: [
    CommonModule,
    QuillModule
  ],
  declarations: [CommentListComponent],
  exports: [CommentListComponent]
})
export class CommentListModule { }

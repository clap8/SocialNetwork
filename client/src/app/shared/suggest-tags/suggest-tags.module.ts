import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestTagsComponent } from './suggest-tags.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuggestTagsComponent],
  exports: [SuggestTagsComponent]
})
export class SuggestTagsModule { }

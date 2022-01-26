import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestCommunitiesComponent } from './suggest-communities.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuggestCommunitiesComponent],
  exports:[SuggestCommunitiesComponent]
})
export class SuggestCommunitiesModule { }

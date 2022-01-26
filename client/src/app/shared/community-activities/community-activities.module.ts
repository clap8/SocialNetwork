import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityActivitiesComponent } from './community-activities.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommunityActivitiesComponent],
  exports: [CommunityActivitiesComponent]
})
export class CommunityActivitiesModule { }

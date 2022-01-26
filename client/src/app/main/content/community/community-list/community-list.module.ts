import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from '@shared/shared.module';
import { CommunityListComponent } from './community-list.component';

const routes = [
  {
    path: 'community-list',
    component: CommunityListComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [CommunityListComponent]
})
export class CommunityListModule { }

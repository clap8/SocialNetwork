import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from '@shared/shared.module';
import { MyCommunityListComponent } from './my-community-list.component';

const routes = [
  {
    path: 'my-community-list',
    component: MyCommunityListComponent,
    data: { state: 'my-community-list'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [MyCommunityListComponent]
})
export class MyCommunityListModule { }

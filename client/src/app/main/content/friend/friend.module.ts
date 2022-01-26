import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '@shared/shared.module';
import { FriendListComponent } from './friend-list/friend-list.component';

const routes = [
  {
    path: 'friend-list',
    component: FriendListComponent,
    data: { state: 'friend-list'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [FriendListComponent]
})
export class FriendModule { }

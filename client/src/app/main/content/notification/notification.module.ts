import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '@shared/shared.module';
import { NotificationComponent } from './notification.component';

const routes = [
  {
    path: 'notification',
    component: NotificationComponent,
    data: { state: 'notification'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    NotificationComponent
  ]
})
export class NotificationModule { }

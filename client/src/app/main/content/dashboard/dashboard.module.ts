import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxMasonryModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

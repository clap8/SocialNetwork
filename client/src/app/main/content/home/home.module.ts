import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home'}
  }
];

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [ HomeComponent]
})
export class HomeModule { }

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MainModule,
    ServicesModule,
    CommonModule
  ],
  providers: [],
})
export class AppModule { }

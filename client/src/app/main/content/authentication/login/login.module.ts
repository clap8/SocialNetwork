import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

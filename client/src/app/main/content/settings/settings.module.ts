import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { NotificationComponent } from './notification/notification.component';

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'password', component: PasswordComponent},
      {path: 'notification', component: NotificationComponent} 
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsComponent, AccountComponent, PasswordComponent, NotificationComponent]
})
export class SettingsModule { }

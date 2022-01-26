import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { ContentComponent } from './content.component';

import { LoginModule } from './authentication/login/login.module';
import { RegisterModule } from './authentication/register/register.module';
import { CommunityListModule } from './community/community-list/community-list.module';
import { MyCommunityListModule } from './community/my-community-list/my-community-list.module';
import { CommunityPageModule } from './community/community-page/community-page.module';
import { FriendModule } from './friend/friend.module';
import { HomeModule } from './home/home.module';
import { NotificationModule } from './notification/notification.module';
import { SettingsModule } from './settings/settings.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,

    LoginModule,
    RegisterModule,
    CommunityListModule,
    MyCommunityListModule,
    CommunityPageModule,
    FriendModule,
    HomeModule,
    NotificationModule,
    SettingsModule,
    DashboardModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }

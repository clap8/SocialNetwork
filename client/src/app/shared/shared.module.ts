import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { QuillModule } from 'ngx-quill';
import { NgSelectModule } from '@ng-select/ng-select';
//**************************************************************************************************************************** */
import { CommunityCardModule } from './community-card/community-card.module';
import { CommunityActivitiesModule } from './community-activities/community-activities.module';
import { SuggestCommunitiesModule } from './suggest-communities/suggest-communities.module';
import { SuggestTagsModule } from './suggest-tags/suggest-tags.module';

import { CommentListModule } from './comment-list/comment-list.module';
import { UserCardModule } from './user-card/user-card.module';
import { MeetPlaceModule } from './meet-place/meet-place.module';

import { MyStatsModule } from './my-stats/my-stats.module';
import { MyTagsModule } from './my-tags/my-tags.module';

import { CommunityViewEventModule } from './community-view-event/community-view-event.module';
import { CommunityViewPostModule } from './community-view-post/community-view-post.module';

import { CommunityCardEventModule } from './community-card-event/community-card-event.module';
import { CommunityCardPostModule } from './community-card-post/community-card-post.module';
//**************************************************************************************************************************** */

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    PopoverModule.forRoot(),
    QuillModule,
    NgSelectModule,

    CommunityCardModule,
    CommunityActivitiesModule,
    SuggestCommunitiesModule,
    SuggestTagsModule,

    CommentListModule,
    UserCardModule,
    MeetPlaceModule,

    MyStatsModule,
    MyTagsModule,
    CommunityViewEventModule,
    CommunityViewPostModule,
    CommunityCardEventModule,
    CommunityCardPostModule
  ],
  exports: [
    FormsModule,
    BsDropdownModule,
    ButtonsModule,
    ModalModule,
    AlertModule,
    TypeaheadModule,
    PopoverModule,
    QuillModule,
    NgSelectModule,

    CommunityCardModule,
    CommunityActivitiesModule,
    SuggestCommunitiesModule,
    SuggestTagsModule,

    CommentListModule,
    UserCardModule,
    MeetPlaceModule,

    MyStatsModule,
    MyTagsModule,
    CommunityViewEventModule,
    CommunityViewPostModule,
    CommunityCardEventModule,
    CommunityCardPostModule
  ],
  declarations: []
})
export class SharedModule { }

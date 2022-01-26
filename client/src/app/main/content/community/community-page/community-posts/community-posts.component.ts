import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CommunityCreatePostComponent } from './community-create-post/community-create-post.component';

@Component({
  selector: 'app-community-posts',
  templateUrl: './community-posts.component.html',
  styleUrls: ['./community-posts.component.scss']
})
export class CommunityPostsComponent implements OnInit {
  bsModalRef: BsModalRef;
  public myOptions: NgxMasonryOptions = {
    percentPosition: true
  };

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' }
  ];

  constructor(private modalService: BsModalService) { }

  openModalCreatePost() {
    const initialState = {
      class: "modal-dialog-fullscreen scrollable"
    };

    this.bsModalRef = this.modalService.show(CommunityCreatePostComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() { }
}
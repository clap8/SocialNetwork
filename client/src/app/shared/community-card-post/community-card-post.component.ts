import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { CommunityViewPostComponent } from '@shared/community-view-post/community-view-post.component';

@Component({
  selector: 'app-community-card-post',
  templateUrl: './community-card-post.component.html',
  styleUrls: ['./community-card-post.component.scss']
})
export class CommunityCardPostComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalViewPost() {
    const initialState = {
      postid: 10,
      class: "modal-dialog-fullscreen"
    };

    this.bsModalRef = this.modalService.show(CommunityViewPostComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

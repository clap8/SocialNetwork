import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CommunityViewEventComponent } from '@shared/community-view-event/community-view-event.component';

@Component({
  selector: 'app-community-card-event',
  templateUrl: './community-card-event.component.html',
  styleUrls: ['./community-card-event.component.scss']
})
export class CommunityCardEventComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {}

  openModalViewEvent() {
    const initialState = {
      eventid: 10,
      class: "modal-dialog-fullscreen"
    };

    this.bsModalRef = this.modalService.show(CommunityViewEventComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

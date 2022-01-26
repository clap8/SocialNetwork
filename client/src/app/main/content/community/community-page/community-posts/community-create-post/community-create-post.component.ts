import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-community-create-post',
  templateUrl: './community-create-post.component.html',
  styleUrls: ['./community-create-post.component.scss']
})
export class CommunityCreatePostComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}

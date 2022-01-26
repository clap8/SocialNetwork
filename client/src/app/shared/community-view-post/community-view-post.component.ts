import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
 
@Component({
  selector: 'app-community-view-post',
  templateUrl: './community-view-post.component.html',
  styleUrls: ['./community-view-post.component.scss']
})
export class CommunityViewPostComponent implements OnInit {
  title: string;
  closeBtnName: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
  }
}
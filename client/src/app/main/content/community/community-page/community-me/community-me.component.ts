import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-community-me',
  templateUrl: './community-me.component.html',
  styleUrls: ['./community-me.component.scss']
})
export class CommunityMeComponent implements OnInit {
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

  constructor() { }

  ngOnInit() { }
}
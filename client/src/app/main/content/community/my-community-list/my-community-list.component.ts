import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-my-community-list',
  templateUrl: './my-community-list.component.html',
  styleUrls: ['./my-community-list.component.scss']
})
export class MyCommunityListComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    percentPosition: true
  };

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' }
  ];

  constructor() { }

  ngOnInit() {}

}

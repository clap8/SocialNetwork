import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-community-events',
  templateUrl: './community-events.component.html',
  styleUrls: ['./community-events.component.scss']
})
export class CommunityEventsComponent implements OnInit {
  public selectedFilter:string = 'Oncoming';
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

  ngOnInit() {}
}

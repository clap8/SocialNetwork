import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-community-home',
  templateUrl: './community-home.component.html',
  styleUrls: ['./community-home.component.scss']
})
export class CommunityHomeComponent implements OnInit {

  options: CloudOptions = {
    width:1140,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'J-pop', weight: 10, link: 'javascript:void(0)' },
    { text: 'itano tomomi', weight: 7, link: 'javascript:void(0)' },
    { text: 'akane', weight: 5, link: 'javascript:void(0)' },
    { text: 'k-pop', weight: 10, link: 'javascript:void(0)' },
    { text: 'japan-cooking', weight: 4, link: 'javascript:void(0)' },
    { text: 'picture', weight: 3, link: 'javascript:void(0)' },
    { text: 'vlog', weight: 10, link: 'javascript:void(0)' },
    { text: 'live', weight: 1, link: 'javascript:void(0)' },
    { text: 'photo', weight: 5, link: 'javascript:void(0)' },
    { text: 'selfy', weight: 8, link: 'javascript:void(0)' },
    { text: 'akb48', weight: 2, link: 'javascript:void(0)' },
    { text: 'ramen', weight: 5, link: 'javascript:void(0)' },
  ];

  constructor() { }

  ngOnInit() {}

  logClicked(clicked: CloudData){
    console.log(clicked);
  }
}
